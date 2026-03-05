const express = require('express');
const router = express.Router();
const db = require('../config/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Secret key for JWT (in production, use environment variable)
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

/**
 * @route   POST /api/auth/register
 * @desc    Register a new user
 * @access  Public
 */
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  // Validation
  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Please provide all required fields (name, email, password)'
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

  // Password validation (minimum 6 characters)
  if (password.length < 6) {
    return res.status(400).json({
      success: false,
      message: 'Password must be at least 6 characters long'
    });
  }

  try {
    // Check if user already exists
    const [existingUsers] = await db.query(
      'SELECT id FROM users WHERE email = ?',
      [email]
    );

    if (existingUsers.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'An account with this email already exists'
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert user into database
    const [result] = await db.query(
      'INSERT INTO users (name, email, password, role, status) VALUES (?, ?, ?, ?, ?)',
      [name, email, hashedPassword, 'user', 'active']
    );

    // Create JWT token
    const token = jwt.sign(
      { 
        id: result.insertId, 
        email: email,
        role: 'user'
      },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    console.log('✓ New user registered:', email);

    res.status(201).json({
      success: true,
      message: 'Account created successfully!',
      token,
      user: {
        id: result.insertId,
        name,
        email,
        role: 'user'
      }
    });

  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create account. Please try again later.'
    });
  }
});

/**
 * @route   POST /api/auth/login
 * @desc    Login user
 * @access  Public
 */
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Please provide email and password'
    });
  }

  try {
    // Check if user exists
    const [users] = await db.query(
      'SELECT id, name, email, password, role, status FROM users WHERE email = ?',
      [email]
    );

    if (users.length === 0) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    const user = users[0];

    // Check if account is active
    if (user.status !== 'active') {
      return res.status(403).json({
        success: false,
        message: 'Your account has been suspended. Please contact support.'
      });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Update last login
    await db.query(
      'UPDATE users SET last_login = NOW() WHERE id = ?',
      [user.id]
    );

    // Create JWT token
    const token = jwt.sign(
      { 
        id: user.id, 
        email: user.email,
        role: user.role
      },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    console.log('✓ User logged in:', email);

    res.json({
      success: true,
      message: 'Login successful!',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to login. Please try again later.'
    });
  }
});

/**
 * @route   GET /api/auth/verify
 * @desc    Verify JWT token
 * @access  Private
 */
router.get('/verify', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'No token provided'
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    
    // Get user from database
    const [users] = await db.query(
      'SELECT id, name, email, role, status FROM users WHERE id = ?',
      [decoded.id]
    );

    if (users.length === 0) {
      return res.status(401).json({
        success: false,
        message: 'User not found'
      });
    }

    const user = users[0];

    if (user.status !== 'active') {
      return res.status(403).json({
        success: false,
        message: 'Account suspended'
      });
    }

    res.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Invalid or expired token'
    });
  }
});

module.exports = router;
