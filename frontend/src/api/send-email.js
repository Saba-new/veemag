// API Route for sending emails with Resend
// This should be placed in your backend/API directory
// For Next.js: pages/api/send-email.js
// For Express: routes/send-email.js

// Install Resend: npm install resend

import { Resend } from 'resend';

// Initialize Resend with your API key
// Get your API key from: https://resend.com/api-keys
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Validate input
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Send email using Resend
    const data = await resend.emails.send({
      from: 'VEEMAG Contact <onboarding@resend.dev>', // Replace with your verified domain
      to: ['veemag@gmail.com'], // Your receiving email
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0e0d0b;">New Contact Form Submission</h2>
          <div style="background: #f5f2ec; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="padding: 20px; background: #ffffff; border: 1px solid #d4cfc4; border-radius: 8px;">
            <h3 style="color: #0e0d0b; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #1a1916;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was sent from the VEEMAG contact form.
          </p>
        </div>
      `,
    });

    return res.status(200).json({ message: 'Email sent successfully', data });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
}

/* 
SETUP INSTRUCTIONS:

1. Install Resend:
   npm install resend

2. Get your Resend API key:
   - Sign up at https://resend.com
   - Go to API Keys section
   - Create a new API key
   - Add it to your .env file:
     RESEND_API_KEY=re_xxxxxxxxxxxxx

3. Verify your domain (for production):
   - Go to Domains in Resend dashboard
   - Add and verify your domain
   - Update the 'from' email to use your verified domain

4. For testing, you can use 'onboarding@resend.dev'

5. Update the Contact.jsx fetch URL to point to this API endpoint

EXPRESS SETUP ALTERNATIVE:
If using Express.js instead of Next.js:

const express = require('express');
const { Resend } = require('resend');
const router = express.Router();

const resend = new Resend(process.env.RESEND_API_KEY);

router.post('/api/send-email', async (req, res) => {
  // Same logic as above
});

module.exports = router;
*/
