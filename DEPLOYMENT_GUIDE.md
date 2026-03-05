# 🚀 Deployment Guide - Vercel & Render

## Frontend Deployment (Vercel)

### Step 1: Environment Variables for Vercel

Add these in Vercel Dashboard → Settings → Environment Variables:

```bash
# Backend API URL (will be your Render URL)
VITE_API_URL=https://your-backend-app.onrender.com
```

### Step 2: Vercel Deployment Settings

**Root Directory:** `frontend`

**Build Command:** `npm run build`

**Output Directory:** `dist`

**Install Command:** `npm install`

### Step 3: Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project root
cd C:\Users\SABARISH\Desktop\veemag

# Deploy
vercel

# Or deploy from GitHub (recommended)
# Connect your repo at vercel.com and it will auto-deploy
```

---

## Backend Deployment (Render)

### Step 1: Environment Variables for Render

Add these in Render Dashboard → Environment → Environment Variables:

```bash
# Node Environment
NODE_ENV=production

# Server Configuration
PORT=5000

# MySQL Database Configuration
DB_HOST=srv668.hstgr.io
DB_USER=u968184706_veemag
DB_PASSWORD=your_actual_database_password
DB_NAME=u968184706_veemag

# Resend Email API
RESEND_API_KEY=re_your_actual_resend_key

# Email Configuration
EMAIL_FROM=onboarding@resend.dev
EMAIL_TO=veemagrnd06@gmail.com

# CORS Configuration (Your Vercel Frontend URL)
FRONTEND_URL=https://your-frontend-app.vercel.app

# JWT Secret (generate a random secure string)
JWT_SECRET=your_random_jwt_secret_here_make_it_long_and_secure
```

### Step 2: Render Service Settings

**Environment:** `Node`

**Region:** Choose closest to your database

**Branch:** `main`

**Root Directory:** `backend`

**Build Command:** `npm install`

**Start Command:** `npm start`

### Step 3: Update package.json

Make sure your `backend/package.json` has:

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

---

## 📝 Complete Environment Variables Reference

### Backend (.env for Render)

| Variable | Example | Required | Description |
|----------|---------|----------|-------------|
| `NODE_ENV` | `production` | Yes | Environment mode |
| `PORT` | `5000` | Yes | Server port (Render uses 10000 by default) |
| `DB_HOST` | `srv668.hstgr.io` | Yes | MySQL host |
| `DB_USER` | `u968184706_veemag` | Yes | Database username |
| `DB_PASSWORD` | `YourPassword123` | Yes | Database password |
| `DB_NAME` | `u968184706_veemag` | Yes | Database name |
| `RESEND_API_KEY` | `re_123abc...` | Yes | Resend API key |
| `EMAIL_FROM` | `onboarding@resend.dev` | Yes | Sender email |
| `EMAIL_TO` | `veemagrnd06@gmail.com` | Yes | Recipient email |
| `FRONTEND_URL` | `https://veemag.vercel.app` | Yes | CORS origin |
| `JWT_SECRET` | `long_random_string` | Yes | JWT signing key |

### Frontend (.env for Vercel)

| Variable | Example | Required | Description |
|----------|---------|----------|-------------|
| `VITE_API_URL` | `https://veemag-api.onrender.com` | Yes | Backend API URL |

---

## 🔧 Update Frontend API Calls

Update the API base URL in your frontend components:

**Before (local):**
```javascript
fetch('http://localhost:5000/api/auth/login', {...})
```

**After (production):**
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
fetch(`${API_URL}/api/auth/login`, {...})
```

### Files to Update:

1. `frontend/src/components/Auth.jsx`
2. `frontend/src/components/Contact.jsx`

---

## 🎯 Quick Deployment Steps

### Option 1: Using Web UI (Recommended)

**For Vercel (Frontend):**
1. Go to https://vercel.com
2. Click "New Project"
3. Import from GitHub: `Saba-new/veemag`
4. Set Root Directory: `frontend`
5. Add environment variable: `VITE_API_URL`
6. Click "Deploy"

**For Render (Backend):**
1. Go to https://render.com
2. Click "New +" → "Web Service"
3. Connect GitHub: `Saba-new/veemag`
4. Set Root Directory: `backend`
5. Add all environment variables listed above
6. Click "Create Web Service"

### Option 2: Using CLI

**Vercel:**
```bash
cd frontend
vercel --prod
```

**Render:**
```bash
# Push to GitHub (already done)
# Render will auto-deploy from GitHub
```

---

## 🔐 Security Checklist

- [ ] Change `JWT_SECRET` to a long random string
- [ ] Update `FRONTEND_URL` to your actual Vercel URL
- [ ] Update `VITE_API_URL` to your actual Render URL
- [ ] Verify database firewall allows Render IPs
- [ ] Test CORS settings work correctly
- [ ] Never commit `.env` files to GitHub

---

## 🧪 Testing After Deployment

1. **Test Backend:**
   ```bash
   curl https://your-backend.onrender.com/api/auth/verify
   # Should return: {"success":false,"message":"No token provided"}
   ```

2. **Test Frontend:**
   - Visit `https://your-frontend.vercel.app`
   - Try signup/login
   - Try contact form
   - Check browser console for errors

3. **Test Email:**
   - Submit contact form
   - Check if email arrives at `veemagrnd06@gmail.com`

---

## 🐛 Common Issues

### Issue: CORS Error
**Solution:** Update `FRONTEND_URL` in Render to match your Vercel URL exactly (no trailing slash)

### Issue: Database Connection Failed
**Solution:** Check if your database allows connections from Render's IP addresses

### Issue: JWT Error
**Solution:** Make sure `JWT_SECRET` is set in Render environment variables

### Issue: API Not Found (404)
**Solution:** Update `VITE_API_URL` in Vercel to your Render backend URL

---

## 📊 Post-Deployment Monitoring

**Vercel:**
- View logs: Vercel Dashboard → Deployments → Select deployment → Logs
- View analytics: Vercel Dashboard → Analytics

**Render:**
- View logs: Render Dashboard → Your service → Logs tab
- View metrics: Render Dashboard → Your service → Metrics tab

---

## 🎉 Your Deployment URLs

After deployment, you'll have:

- **Frontend:** `https://veemag.vercel.app` (or your custom domain)
- **Backend:** `https://veemag-backend.onrender.com`
- **GitHub:** `https://github.com/Saba-new/veemag`

---

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- Render Docs: https://render.com/docs
