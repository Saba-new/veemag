const mysql = require('mysql2/promise');
require('dotenv').config();

async function setupDatabase() {
  let connection;
  
  try {
    // Create connection
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    console.log('✓ Connected to MySQL database');

    // Create contact_submissions table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(500) NOT NULL,
        message TEXT NOT NULL,
        submitted_at DATETIME NOT NULL,
        status ENUM('new', 'read', 'responded') DEFAULT 'new',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX idx_email (email),
        INDEX idx_submitted_at (submitted_at),
        INDEX idx_status (status)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

    console.log('✓ Table "contact_submissions" created/verified successfully');

    // Check if table exists and show structure
    const [tables] = await connection.query('SHOW TABLES');
    console.log('\nAvailable tables:');
    tables.forEach(table => {
      console.log('  -', Object.values(table)[0]);
    });

    // Show table structure
    const [columns] = await connection.query('DESCRIBE contact_submissions');
    console.log('\nTable structure for "contact_submissions":');
    columns.forEach(col => {
      console.log(`  - ${col.Field} (${col.Type})`);
    });

    console.log('\n✓ Database setup completed successfully!');

  } catch (error) {
    console.error('✗ Database setup failed:', error.message);
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

// Run setup
setupDatabase();
