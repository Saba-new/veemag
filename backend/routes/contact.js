const express = require('express');
const router = express.Router();
const db = require('../config/database');
const { Resend } = require('resend');

// Initialize Resend with API key (conditionally)
let resend = null;
if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 'your_resend_api_key_here') {
  resend = new Resend(process.env.RESEND_API_KEY);
  console.log('✓ Resend email service initialized');
} else {
  console.warn('⚠ Resend API key not configured. Email functionality will be disabled.');
  console.warn('  Get your API key from https://resend.com and add it to .env file');
}

/**
 * @route   POST /api/contact/submit
 * @desc    Submit contact form and send email
 * @access  Public
 */
router.post('/submit', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address'
    });
  }

  try {
    // Insert into database
    const [result] = await db.query(
      'INSERT INTO contact_submissions (name, email, subject, message, submitted_at) VALUES (?, ?, ?, ?, NOW())',
      [name, email, subject, message]
    );

    // Send email using Resend (if configured)
    if (resend) {
      try {
        const emailResponse = await resend.emails.send({
          from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
          to: process.env.EMAIL_TO || 'veemagrnd@gmail.com',
          replyTo: email,
          subject: `New Contact Form: ${subject}`,
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <style>
                  body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #1a2e2a; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                  .header { background: linear-gradient(135deg, #d4e7e0, #c8dfd5); padding: 30px; text-align: center; border-radius: 12px 12px 0 0; }
                  .header h1 { margin: 0; color: #1a2e2a; font-size: 24px; }
                  .content { background: #ffffff; padding: 30px; border: 1px solid #d4cfc4; }
                  .field { margin-bottom: 20px; }
                  .label { font-weight: 600; color: #2d6e4e; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
                  .value { margin-top: 5px; color: #1a2e2a; }
                  .footer { background: #f5f2ec; padding: 20px; text-align: center; font-size: 12px; color: #7a7469; border-radius: 0 0 12px 12px; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h1>📧 New Contact Form Submission</h1>
                  </div>
                  <div class="content">
                    <div class="field">
                      <div class="label">From:</div>
                      <div class="value"><strong>${name}</strong></div>
                    </div>
                    <div class="field">
                      <div class="label">Email:</div>
                      <div class="value">${email}</div>
                    </div>
                    <div class="field">
                      <div class="label">Subject:</div>
                      <div class="value">${subject}</div>
                    </div>
                    <div class="field">
                      <div class="label">Message:</div>
                      <div class="value">${message.replace(/\n/g, '<br>')}</div>
                    </div>
                    <div class="field">
                      <div class="label">Submitted At:</div>
                      <div class="value">${new Date().toLocaleString()}</div>
                    </div>
                  </div>
                  <div class="footer">
                    <p>This email was sent from the VEEMAG contact form.</p>
                    <p>Submission ID: ${result.insertId}</p>
                  </div>
                </div>
              </body>
            </html>
          `
        });

        console.log('✓ Email sent successfully');
        console.log('  Email ID:', emailResponse.data?.id || emailResponse.id || 'N/A');
        console.log('  To:', process.env.EMAIL_TO);
        console.log('  Response:', JSON.stringify(emailResponse, null, 2));
      } catch (emailError) {
        console.error('✗ Email sending failed:', emailError.message);
        // Continue even if email fails - data is already in database
      }
    } else {
      console.log('⚠ Email not sent - Resend API key not configured');
    }

    res.status(201).json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
      submissionId: result.insertId
    });

  } catch (error) {
    console.error('Error saving contact submission:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit your message. Please try again later.'
    });
  }
});

/**
 * @route   GET /api/contact/submissions
 * @desc    Get all contact submissions (admin only)
 * @access  Private
 */
router.get('/submissions', async (req, res) => {
  try {
    const [rows] = await db.query(
      'SELECT * FROM contact_submissions ORDER BY submitted_at DESC LIMIT 100'
    );

    res.json({
      success: true,
      count: rows.length,
      data: rows
    });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch submissions'
    });
  }
});

module.exports = router;
