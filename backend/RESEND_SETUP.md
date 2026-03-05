# 📧 How to Add Resend API Key

Your backend server is now running, but email functionality is disabled because the Resend API key is missing.

## Quick Setup (5 minutes)

### Step 1: Get Your Free API Key

1. Go to https://resend.com
2. Click "Sign Up" (it's free!)
3. Verify your email
4. Go to "API Keys" in the dashboard
5. Click "Create API Key"
6. Copy the key (it starts with `re_`)

### Step 2: Add to Your .env File

1. Open `backend/.env` in your editor
2. Find this line:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   ```
3. Replace with your actual key:
   ```
   RESEND_API_KEY=re_abc123your_actual_key_here
   ```
4. Save the file

### Step 3: Restart Your Server

The server will automatically reload (nodemon will detect the change).

You should see:
```
✓ Resend email service initialized
```

## What Works Without API Key?

✅ Backend server runs
✅ Database connections work
✅ Contact form submissions are saved to database
✅ All API endpoints work
❌ Email notifications won't be sent

## What Works With API Key?

✅ Everything above, PLUS:
✅ Automatic email notifications when someone submits contact form
✅ Formatted HTML emails sent to veemagrnd@gmail.com

## Verify Domain (Optional, for production)

For production use, verify your domain in Resend:

1. Go to Resend dashboard → Domains
2. Click "Add Domain"
3. Enter your domain (e.g., veemag.com)
4. Add the DNS records shown
5. Update `EMAIL_FROM` in `.env`:
   ```
   EMAIL_FROM=noreply@yourdomain.com
   ```

## Free Tier Limits

Resend free tier includes:
- 3,000 emails/month
- 100 emails/day
- Perfect for testing and small projects

## Testing Email

After adding the API key:

1. Go to http://localhost:3002/contact
2. Fill out the contact form
3. Submit
4. Check the backend console - you should see:
   ```
   ✓ Email sent successfully: <email-id>
   ```
5. Check veemagrnd@gmail.com inbox

## Need Help?

- Resend docs: https://resend.com/docs
- Contact email: veemagrnd@gmail.com

---

💡 **Tip**: The contact form still works without the API key - submissions are saved to your MySQL database. You can add the API key later when you're ready for email notifications!
