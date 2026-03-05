# 🚀 Quick Setup - Run This First!

## ⚠️ IMPORTANT: Create Database Table

The signup is failing because the `users` table doesn't exist yet!

### Step 1: Open MySQL Workbench

1. Open **MySQL Workbench**
2. Connect to your database server: `srv668.hstgr.io`
3. Select the database: `u968184706_veemag`

### Step 2: Run This SQL

Copy and paste this into a new query tab:

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

### Step 3: Execute

Click the ⚡ lightning bolt icon (or press Ctrl+Enter)

### Step 4: Verify

Run this to confirm the table was created:

```sql
SHOW TABLES LIKE 'users';
```

You should see:

```
Tables_in_u968184706_veemag (users)
users
```

### Step 5: Test Signup Again

Now go back to http://localhost:3002/auth and try creating your account again!

---

## ✅ After Table Creation

Your signup will work and you'll see:
- Account created successfully
- Redirected to homepage  
- Navbar shows "Hi, Sabarish K"
- Logout button appears

## 🔍 Verify Your Account

In MySQL Workbench, run:

```sql
SELECT id, name, email, role, status, created_at 
FROM users 
ORDER BY created_at DESC;
```

You'll see your account with:
- **name**: Sabarish K
- **email**: k.sabarish2005@gmail.com
- **password**: (hashed with bcrypt ✅)
- **role**: user
- **status**: active

---

That's it! Create the table and try again! 🎉
