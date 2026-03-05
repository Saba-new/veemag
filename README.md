# VEEMAG R&D Ventures

Official website for VEEMAG R&D Ventures - pioneering AI research and development.

## 🏗️ Project Structure

```
veemag/
├── frontend/          # React + Vite frontend application
│   ├── src/          # Source files (components, pages, styles)
│   ├── public/       # Static assets
│   └── package.json
│
├── backend/          # Express + Node.js + MySQL backend
│   ├── config/       # Database configuration
│   ├── routes/       # API routes
│   ├── scripts/      # Utility scripts
│   └── package.json
│
└── README.md         # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MySQL database
- npm or yarn

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:3002`

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Update with your database credentials and API keys

4. Setup database:
```bash
npm run setup-db
```

5. Start backend server:
```bash
npm run dev
```

Backend will run on `http://localhost:5000`

## 📦 Technology Stack

### Frontend
- **React 18** - UI library
- **Vite 5** - Build tool and dev server
- **React Router DOM 6** - Client-side routing
- **CSS3** - Styling with modern animations
- **Intersection Observer** - Scroll animations

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MySQL 2** - Database with promise support
- **Resend** - Email service API
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 🔧 Development

### Frontend Commands
```bash
npm run dev      # Start development server (port 3002)
npm run build    # Build for production
npm run preview  # Preview production build
```

### Backend Commands
```bash
npm run dev      # Start with nodemon (auto-reload)
npm start        # Start production server
npm run setup-db # Setup database tables
```

## 📝 Environment Variables

### Frontend
No environment variables required for development.
Update API URLs in production deployment.

### Backend (backend/.env)
```env
NODE_ENV=development
PORT=5000
DB_HOST=srv668.hstgr.io
DB_USER=u968184706_veemag
DB_PASSWORD=your_password
DB_NAME=u968184706_veemag
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=onboarding@resend.dev
EMAIL_TO=veemagrnd@gmail.com
FRONTEND_URL=http://localhost:3002
```

## 🌐 API Endpoints

### Contact API
- `POST /api/contact/submit` - Submit contact form
  - Body: `{ name, email, subject, message }`
  - Response: `{ success, message, submissionId }`

### Health Check
- `GET /api/health` - Check server status

### Admin (Optional)
- `GET /api/contact/submissions` - Get all contact submissions

## 💾 Database Schema

### contact_submissions
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

## 🎨 Features

### Frontend
- ✨ Modern, animated hero section with sage green theme
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎯 Active navigation state highlighting
- 🔄 Smooth scroll-triggered animations
- 🌓 Dark/light themed sections
- 📊 Research showcase with canvas visualizations
- 📝 Contact form with real-time validation
- 🦶 Comprehensive footer with social links

### Backend
- 🔒 Secure MySQL database connection
- 📧 Email notifications via Resend API
- ✅ Input validation and error handling
- 💾 Persistent contact form submissions
- 🔄 Connection pooling for performance
- 🛡️ CORS protection with configurable origins

## 🚢 Deployment

### Frontend Deployment
Recommended platforms:
- **Vercel** (recommended for Vite)
- Netlify
- GitHub Pages
- Cloudflare Pages

Build settings:
- Build command: `npm run build`
- Output directory: `dist`
- Node version: 18+

### Backend Deployment
Recommended platforms:
- Heroku
- DigitalOcean App Platform
- Railway
- AWS EC2

Important:
1. Set environment variables in hosting platform
2. Update `FRONTEND_URL` for CORS
3. Ensure MySQL database is accessible
4. Use process manager (PM2) for production

## 📱 Pages

- **Home** (`/`) - Hero section with AI research image and about cards
- **Projects** (`/projects`) - Research showcase and research areas
- **Contact** (`/contact`) - Contact form with info cards

## 🔐 Security Notes

- Never commit `.env` files to version control
- Use environment-specific CORS settings
- Implement rate limiting for production
- Add authentication for admin endpoints
- Keep database credentials secure
- Validate all user inputs

## 🐛 Troubleshooting

### Frontend Issues
**Port already in use:**
```bash
# Change port in vite.config.js or kill process on port 3002
```

**Module not found:**
```bash
cd frontend
npm install
```

### Backend Issues
**Database connection failed:**
- Check credentials in `.env`
- Verify MySQL server is accessible
- Check firewall settings

**Email not sending:**
- Verify Resend API key
- Check domain verification in Resend dashboard
- Review email configuration

**CORS errors:**
- Update `FRONTEND_URL` in backend `.env`
- Ensure both servers are running

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - VEEMAG R&D Ventures

## 👥 Contact

- **Email:** veemagrnd@gmail.com
- **Phone:** +1234567890

---

Built with ❤️ by VEEMAG R&D Ventures
