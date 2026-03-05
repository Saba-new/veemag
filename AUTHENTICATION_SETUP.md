# 🔐 Authentication System Setup Guide

## Step 1: Create the Database Table

Open MySQL Workbench and run this SQL:

```sql
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('user', 'admin') DEFAULT 'user',
  status ENUM('active', 'inactive', 'suspended') DEFAULT 'active',
  email_verified BOOLEAN DEFAULT FALSE,
  last_login DATETIME NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  INDEX idx_email (email),
  INDEX idx_status (status),
  INDEX idx_role (role)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

Or use the file at: `backend/sql/create_users_table.sql`

## Step 2: Backend is Ready!

✅ Backend routes created at `/api/auth`  
✅ Dependencies installed (bcryptjs, jsonwebtoken)  
✅ Routes added to server.js

## Step 3: Test the System

### Register a New User
```bash
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Login
```bash
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

## Step 4: Access the Signup/Login Page

Go to: **http://localhost:3002/auth**

## Features

✅ **Signup Page** - Create new account  
✅ **Login Page** - Sign in to existing account  
✅ **Password Hashing** - Secure bcrypt hashing  
✅ **JWT Tokens** - 7-day expiration  
✅ **Email Validation** - Checks valid email format  
✅ **Password Strength** - Minimum 6 characters  
✅ **Duplicate Check** - Prevents duplicate emails  
✅ **Navbar Integration** - Shows user name when logged in  
✅ **Logout Function** - Clears session  
✅ **Local Storage** - Persists login across page refreshes  

## API Endpoints

### POST /api/auth/register
**Request:**
```json
{
  "name": "User Name",
  "email": "user@example.com",
  "password": "yourpassword"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Account created successfully!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "User Name",
    "email": "user@example.com",
    "role": "user"
  }
}
```

### POST /api/auth/login
**Request:**
```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "User Name",
    "email": "user@example.com",
    "role": "user"
  }
}
```

### GET /api/auth/verify
**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": 1,
    "name": "User Name",
    "email": "user@example.com",
    "role": "user"
  }
}
```

## User Experience

### When Not Logged In:
- Navbar shows: **"Sign In"** and **"Get Started"** buttons
- Both buttons navigate to `/auth` page
- Auth page defaults to login mode

### When Logged In:
- Navbar shows: **"Hi, [Name]"** and **"Logout"** button
- Token and user info saved in localStorage
- Login persists across page refreshes
- Clicking logout clears session and returns to homepage

## Database Schema

**users table:**
- `id` - Auto-increment primary key
- `name` - User's full name
- `email` - Unique email address (indexed)
- `password` - Bcrypt hashed password
- `role` - 'user' or 'admin' (default: 'user')
- `status` - 'active', 'inactive', or 'suspended' (default: 'active')
- `email_verified` - Boolean (default: false)
- `last_login` - Timestamp of last login
- `created_at` - Account creation timestamp
- `updated_at` - Last update timestamp

## View Registered Users

Run this query in MySQL Workbench:

```sql
SELECT id, name, email, role, status, created_at, last_login 
FROM users 
ORDER BY created_at DESC;
```

## Security Features

✅ **Password Hashing** - bcrypt with salt rounds  
✅ **JWT Authentication** - Secure token-based auth  
✅ **Email Uniqueness** - Prevents duplicate accounts  
✅ **Status Checks** - Blocks suspended accounts  
✅ **Input Validation** - Server-side validation  
✅ **7-Day Token Expiry** - Auto logout after 7 days  

## Troubleshooting

### Can't create account
- Check if email already exists
- Verify password is at least 6 characters
- Check database connection

### Can't login
- Verify email and password are correct
- Check if account status is 'active'
- Clear localStorage and try again

### Navbar not updating
- Refresh the page after login
- Check browser console for errors
- Verify token is saved in localStorage

## Next Steps (Optional Enhancements)

1. **Email Verification** - Send verification email after signup
2. **Password Reset** - Forgot password functionality
3. **Profile Page** - Allow users to update their info
4. **Admin Dashboard** - Manage users
5. **OAuth Integration** - Google/GitHub login
6. **Remember Me** - Extended token expiry
7. **Two-Factor Auth** - Enhanced security

---

🎉 **Your authentication system is ready to use!**

Visit http://localhost:3002/auth to test it!
