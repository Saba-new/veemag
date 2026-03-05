# VEEMAG Backend Server

Backend server for VEEMAG R&D Ventures website built with Express.js, Node.js, and MySQL.

## Prerequisites

- Node.js (v14 or higher)
- MySQL database access
- Resend API key (for email functionality)

## Installation

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the values with your actual credentials

4. Set up the database:
```bash
npm run setup-db
```

## Environment Variables

Create a `.env` file in the server directory with the following variables:

```env
NODE_ENV=development
PORT=5000
DB_HOST=srv668.hstgr.io
DB_USER=u968184706_veemag
DB_PASSWORD=qYvZ1!@VuH?2
DB_NAME=u968184706_veemag
RESEND_API_KEY=your_resend_api_key_here
EMAIL_FROM=onboarding@resend.dev
EMAIL_TO=veemagrnd@gmail.com
FRONTEND_URL=http://localhost:3002
```

## Running the Server

### Development Mode (with auto-restart):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Contact Form
- **POST** `/api/contact/submit` - Submit contact form
  - Body: `{ name, email, subject, message }`
  - Response: `{ success, message, submissionId }`

### Health Check
- **GET** `/api/health` - Check server status

### Admin (Optional)
- **GET** `/api/contact/submissions` - Get all submissions

## Database Schema

### contact_submissions Table
```sql
- id (INT, PRIMARY KEY, AUTO_INCREMENT)
- name (VARCHAR 255)
- email (VARCHAR 255)
- subject (VARCHAR 500)
- message (TEXT)
- submitted_at (DATETIME)
- status (ENUM: 'new', 'read', 'responded')
- created_at (TIMESTAMP)
```

## Frontend Integration

Update your Contact component to use the backend API:

```javascript
const response = await fetch('http://localhost:5000/api/contact/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData)
});
```

## Security Notes

- Never commit the `.env` file to version control
- Keep your database credentials secure
- Use environment-specific CORS settings
- Implement rate limiting for production
- Add authentication for admin endpoints

## Troubleshooting

1. **Database connection failed**
   - Check your database credentials in `.env`
   - Ensure MySQL server is accessible
   - Verify firewall settings

2. **Email not sending**
   - Verify your Resend API key
   - Check domain verification in Resend dashboard
   - Review email configuration in `.env`

## Production Deployment

1. Set `NODE_ENV=production` in your environment
2. Use a process manager like PM2:
   ```bash
   npm install -g pm2
   pm2 start server.js --name veemag-backend
   ```
3. Set up HTTPS with a reverse proxy (nginx/Apache)
4. Configure proper CORS settings for your production domain
