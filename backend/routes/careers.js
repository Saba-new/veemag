const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const db = require('../config/database');
const { Resend } = require('resend');

// Initialize Resend
let resend = null;
if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 'your_resend_api_key_here') {
  resend = new Resend(process.env.RESEND_API_KEY);
  console.log('✓ Resend email service initialized for careers');
} else {
  console.warn('⚠ Resend API key not configured for careers module');
}

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, '../uploads/resumes');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    // Accept only PDF, DOC, DOCX files
    const allowedTypes = /pdf|doc|docx/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only PDF, DOC, and DOCX files are allowed'));
    }
  }
});

/**
 * @route   POST /api/careers/apply
 * @desc    Submit job application with resume
 * @access  Public
 */
router.post('/apply', upload.single('resume'), async (req, res) => {
  const { name, email, phone, position, message } = req.body;
  const resume = req.file;

  // Validation
  if (!name || !email || !phone || !position) {
    // Clean up uploaded file if validation fails
    if (resume) {
      fs.unlinkSync(resume.path);
    }
    return res.status(400).json({
      success: false,
      message: 'Name, email, phone, and position are required'
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    if (resume) {
      fs.unlinkSync(resume.path);
    }
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address'
    });
  }

  // Phone validation
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  if (!phoneRegex.test(phone)) {
    if (resume) {
      fs.unlinkSync(resume.path);
    }
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid phone number'
    });
  }

  try {
    // Insert into database
    const [result] = await db.query(
      `INSERT INTO job_applications 
       (name, email, phone, position, message, resume_filename, resume_path, submitted_at) 
       VALUES (?, ?, ?, ?, ?, ?, ?, NOW())`,
      [
        name,
        email,
        phone,
        position,
        message || null,
        resume ? resume.originalname : null,
        resume ? resume.path : null
      ]
    );

    // Send email notification using Resend
    if (resend) {
      try {
        // Read resume file as base64 for attachment
        let attachment = null;
        if (resume) {
          const fileContent = fs.readFileSync(resume.path);
          attachment = {
            filename: resume.originalname,
            content: fileContent
          };
        }

        const emailData = {
          from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
          to: process.env.EMAIL_TO || 'veemagrnd@gmail.com',
          replyTo: email,
          subject: `New Job Application: ${position}`,
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <style>
                  body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #1a2e2a; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                  .header { background: linear-gradient(135deg, #22C55E, #16A34A); padding: 30px; text-align: center; border-radius: 12px 12px 0 0; }
                  .header h1 { margin: 0; color: #ffffff; font-size: 24px; }
                  .content { background: #ffffff; padding: 30px; border: 1px solid #E2E8F0; }
                  .field { margin-bottom: 20px; }
                  .label { font-weight: 600; color: #16A34A; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
                  .value { margin-top: 5px; color: #0F172A; }
                  .position-badge { display: inline-block; background: #22C55E; color: white; padding: 8px 16px; border-radius: 999px; font-weight: 600; margin: 10px 0; }
                  .footer { background: #F8FAFC; padding: 20px; text-align: center; font-size: 12px; color: #64748B; border-radius: 0 0 12px 12px; }
                  .resume-info { background: #F1F5F9; padding: 12px; border-radius: 8px; margin-top: 10px; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h1>💼 New Job Application</h1>
                  </div>
                  <div class="content">
                    <div class="field">
                      <div class="label">Position Applied For:</div>
                      <div class="position-badge">${position}</div>
                    </div>
                    <div class="field">
                      <div class="label">Applicant Name:</div>
                      <div class="value"><strong>${name}</strong></div>
                    </div>
                    <div class="field">
                      <div class="label">Email:</div>
                      <div class="value">${email}</div>
                    </div>
                    <div class="field">
                      <div class="label">Phone:</div>
                      <div class="value">${phone}</div>
                    </div>
                    ${message ? `
                    <div class="field">
                      <div class="label">Why They Want to Join:</div>
                      <div class="value">${message.replace(/\n/g, '<br>')}</div>
                    </div>
                    ` : ''}
                    ${resume ? `
                    <div class="field">
                      <div class="label">Resume:</div>
                      <div class="resume-info">
                        📎 ${resume.originalname} (${(resume.size / 1024).toFixed(2)} KB)
                        <br><small>Attached to this email</small>
                      </div>
                    </div>
                    ` : ''}
                    <div class="field">
                      <div class="label">Submitted At:</div>
                      <div class="value">${new Date().toLocaleString()}</div>
                    </div>
                  </div>
                  <div class="footer">
                    <p>This application was submitted through the VEEMAG Careers page.</p>
                    <p>Application ID: ${result.insertId}</p>
                  </div>
                </div>
              </body>
            </html>
          `
        };

        // Add attachment if resume exists
        if (attachment) {
          emailData.attachments = [attachment];
        }

        const emailResponse = await resend.emails.send(emailData);

        console.log('✓ Job application email sent successfully');
        console.log('  Position:', position);
        console.log('  Applicant:', name);
        console.log('  Email ID:', emailResponse.data?.id || emailResponse.id || 'N/A');
      } catch (emailError) {
        console.error('✗ Email sending failed:', emailError.message);
        // Continue even if email fails - data is already in database
      }
    } else {
      console.log('⚠ Email not sent - Resend API key not configured');
    }

    res.status(201).json({
      success: true,
      message: 'Your application has been submitted successfully! We will review it and get back to you soon.',
      applicationId: result.insertId
    });

  } catch (error) {
    // Clean up uploaded file if database insert fails
    if (resume && fs.existsSync(resume.path)) {
      fs.unlinkSync(resume.path);
    }

    console.error('Error saving job application:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit your application. Please try again later.'
    });
  }
});

/**
 * @route   GET /api/careers/applications
 * @desc    Get all job applications (admin only)
 * @access  Private
 */
router.get('/applications', async (req, res) => {
  try {
    const [rows] = await db.query(
      'SELECT * FROM job_applications ORDER BY submitted_at DESC LIMIT 100'
    );

    res.json({
      success: true,
      count: rows.length,
      data: rows
    });
  } catch (error) {
    console.error('Error fetching job applications:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch applications'
    });
  }
});

module.exports = router;
