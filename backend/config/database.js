const mysql = require('mysql2/promise');

// Create MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
  connectTimeout: 10000 // 10 seconds timeout
});

// Test database connection with timeout and retry
const testConnection = async (retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      const connection = await pool.getConnection();
      console.log('✓ Database connected successfully');
      console.log(`  Host: ${process.env.DB_HOST}`);
      console.log(`  Database: ${process.env.DB_NAME}`);
      connection.release();
      return; // Success, exit function
    } catch (err) {
      if (i === retries - 1) {
        // Last retry failed
        console.error('✗ Database connection failed after', retries, 'attempts:');
        console.error(`  Host: ${process.env.DB_HOST}`);
        console.error(`  User: ${process.env.DB_USER}`);
        console.error(`  Database: ${process.env.DB_NAME}`);
        console.error(`  Error: ${err.message}`);
        if (err.code) console.error(`  Code: ${err.code}`);
        console.error('\n⚠️  The server will continue running, but database operations may fail.');
        console.error('⚠️  This might be a temporary network issue. The connection pool will retry on actual requests.\n');
      } else {
        // Retry
        console.log(`Database connection attempt ${i + 1}/${retries} failed, retrying...`);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second before retry
      }
    }
  }
};

// Test connection on startup (non-blocking)
testConnection();

module.exports = pool;
