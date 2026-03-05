# 🚀 Quick Start Guide

## Project Structure

Your project is now organized into separate frontend and backend folders:

```
veemag/
├── frontend/              # React + Vite application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom hooks
│   │   ├── styles/        # Global styles
│   │   └── assets/        # Images and static files
│   ├── public/            # Public assets
│   ├── package.json
│   └── vite.config.js
│
├── backend/               # Express + Node.js server
│   ├── config/            # Database configuration
│   ├── routes/            # API route handlers
│   ├── scripts/           # Setup and utility scripts
│   ├── .env               # Environment variables (not tracked in git)
│   ├── server.js          # Main server file
│   └── package.json
│
├── package.json           # Root package.json with helper scripts
└── README.md             # Full documentation
```

## 🎯 Getting Started - Step by Step

### Step 1: Install All Dependencies

From the root directory:
```bash
npm run install:all
```

Or manually:
```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### Step 2: Configure Backend

1. Open `backend/.env` file
2. Your database credentials are already configured
3. Add your Resend API key:
   - Sign up at https://resend.com
   - Get your API key from dashboard
   - Update `RESEND_API_KEY` in `.env`

### Step 3: Setup Database

From the root directory:
```bash
npm run setup:db
```

Or manually:
```bash
cd backend
npm run setup-db
```

This will create the `contact_submissions` table in your MySQL database.

### Step 4: Start Development Servers

**Option 1: Open two terminals**

Terminal 1 (Frontend):
```bash
npm run dev:frontend
```
✅ Frontend runs on http://localhost:3002

Terminal 2 (Backend):
```bash
npm run dev:backend
```
✅ Backend runs on http://localhost:5000

**Option 2: Use individual commands**

For frontend:
```bash
cd frontend
npm run dev
```

For backend:
```bash
cd backend
npm run dev
```

## ✅ Verify Everything Works

1. **Frontend Check:**
   - Open http://localhost:3002
   - You should see the VEEMAG homepage
   - Navigate through all pages (Home, Projects, Contact)

2. **Backend Check:**
   - Open http://localhost:5000/api/health
   - You should see: `{"status":"Server is running","timestamp":"..."}`

3. **Contact Form Test:**
   - Go to http://localhost:3002/contact
   - Fill out and submit the contact form
   - Check if email is sent and data is saved in database

## 📁 What Changed?

### Before:
```
veemag/
├── src/              # Frontend files mixed with root
├── server/          # Backend files
└── ...
```

### After:
```
veemag/
├── frontend/        # All frontend files here
├── backend/         # All backend files here (renamed from server)
└── package.json    # Root helper scripts
```

## 🛠️ Available NPM Scripts

### Root Level (veemag/)
- `npm run install:all` - Install all dependencies (frontend + backend)
- `npm run dev:frontend` - Start frontend dev server
- `npm run dev:backend` - Start backend dev server
- `npm run setup:db` - Setup database tables
- `npm run build:frontend` - Build frontend for production

### Frontend (frontend/)
- `npm run dev` - Start development server (port 3002)
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend (backend/)
- `npm run dev` - Start with auto-reload (nodemon)
- `npm start` - Start production server
- `npm run setup-db` - Create database tables

## 🔧 Development Workflow

1. **Start both servers** (frontend on 3002, backend on 5000)
2. **Make changes** to your code
3. **Frontend auto-reloads** when you save files
4. **Backend auto-reloads** with nodemon when you save files
5. **Test features** in the browser

## 🌐 Frontend API Configuration

The contact form is already configured to connect to:
```
http://localhost:5000/api/contact/submit
```

For production, update this URL in:
- `frontend/src/components/Contact.jsx`

## 🚢 Production Deployment

### Frontend
1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```
2. Deploy the `dist` folder to:
   - Vercel
   - Netlify
   - Any static hosting

### Backend
1. Deploy to:
   - Heroku
   - DigitalOcean
   - Railway
2. Update environment variables in hosting dashboard
3. Update CORS `FRONTEND_URL` to your production domain

## ❓ Troubleshooting

### Port Already in Use
```bash
# Frontend (port 3002)
netstat -ano | findstr :3002
taskkill /PID <PID> /F

# Backend (port 5000)
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### Database Connection Failed
- Check `backend/.env` credentials
- Ensure MySQL server is running
- Verify database name exists

### CORS Errors
- Make sure both servers are running
- Check `FRONTEND_URL` in `backend/.env` matches your frontend URL

### Module Not Found
```bash
# Reinstall dependencies
npm run install:all
```

## 📞 Need Help?

Check the full documentation in `README.md` or contact:
- Email: veemagrnd@gmail.com

---

✨ Happy coding! Your project is now properly organized and ready for development!
