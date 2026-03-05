require('dotenv').config();
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

async function testEmail() {
  console.log('Testing Resend email configuration...\n');
  console.log('API Key:', process.env.RESEND_API_KEY ? '***' + process.env.RESEND_API_KEY.slice(-4) : 'NOT SET');
  console.log('From:', process.env.EMAIL_FROM);
  console.log('To:', process.env.EMAIL_TO);
  console.log('\nSending test email...\n');

  try {
    const response = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: 'Test Email from VEEMAG Backend',
      html: '<h1>Test Email</h1><p>If you receive this, your Resend configuration is working!</p>'
    });

    console.log('✓ Email sent successfully!\n');
    console.log('Full response:', JSON.stringify(response, null, 2));
    
    if (response.data) {
      console.log('\nEmail ID:', response.data.id);
    } else if (response.id) {
      console.log('\nEmail ID:', response.id);
    }
    
  } catch (error) {
    console.error('✗ Email sending failed!\n');
    console.error('Error:', error.message);
    console.error('\nFull error:', error);
    console.error('\nCommon issues:');
    console.error('1. Check if your Resend API key is valid');
    console.error('2. Verify the FROM email address in your Resend dashboard');
    console.error('3. Make sure "onboarding@resend.dev" is allowed (or use your own verified domain)');
  }
}

testEmail();
