require('dotenv').config();
const mysql = require('mysql2/promise');

async function testConnection() {
  console.log('Testing database connection...\n');
  console.log('Configuration:');
  console.log(`  Host: ${process.env.DB_HOST}`);
  console.log(`  User: ${process.env.DB_USER}`);
  console.log(`  Database: ${process.env.DB_NAME}`);
  console.log(`  Password: ${process.env.DB_PASSWORD ? '***' + process.env.DB_PASSWORD.slice(-3) : 'NOT SET'}\n`);

  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      connectTimeout: 10000
    });

    console.log('✓ Connection successful!');
    console.log('✓ Testing query...');
    
    const [rows] = await connection.execute('SELECT 1 + 1 AS result');
    console.log('✓ Query successful:', rows);
    
    await connection.end();
    console.log('✓ All tests passed!');
    process.exit(0);
  } catch (error) {
    console.error('✗ Connection failed!\n');
    console.error('Error details:');
    console.error(`  Message: ${error.message}`);
    console.error(`  Code: ${error.code}`);
    console.error(`  Errno: ${error.errno}`);
    console.error(`  SQL State: ${error.sqlState || 'N/A'}`);
    console.error(`  SQL Message: ${error.sqlMessage || 'N/A'}`);
    console.error('\nFull error:', error);
    process.exit(1);
  }
}

testConnection();
