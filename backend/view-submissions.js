require('dotenv').config();
const mysql = require('mysql2/promise');

async function viewSubmissions() {
  try {
    const db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    console.log('═══════════════════════════════════════════════════════════════');
    console.log('           📧 CONTACT FORM SUBMISSIONS');
    console.log('═══════════════════════════════════════════════════════════════\n');

    const [rows] = await db.query(`
      SELECT 
        id, 
        name, 
        email, 
        subject, 
        message,
        submitted_at,
        status
      FROM contact_submissions 
      ORDER BY submitted_at DESC
    `);

    if (rows.length === 0) {
      console.log('No submissions yet.\n');
    } else {
      rows.forEach((row, index) => {
        console.log(`┌─ Submission #${row.id} ─────────────────────────────────────────────`);
        console.log(`│ Name: ${row.name}`);
        console.log(`│ Email: ${row.email}`);
        console.log(`│ Subject: ${row.subject}`);
        console.log(`│ Message: ${row.message}`);
        console.log(`│ Submitted: ${new Date(row.submitted_at).toLocaleString()}`);
        console.log(`│ Status: ${row.status.toUpperCase()}`);
        console.log(`└${'─'.repeat(65)}\n`);
      });

      console.log(`Total Submissions: ${rows.length}`);
      console.log('\nStatus Breakdown:');
      const statusCounts = rows.reduce((acc, row) => {
        acc[row.status] = (acc[row.status] || 0) + 1;
        return acc;
      }, {});
      Object.entries(statusCounts).forEach(([status, count]) => {
        console.log(`  - ${status}: ${count}`);
      });
    }

    await db.end();
    console.log('\n═══════════════════════════════════════════════════════════════\n');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

viewSubmissions();
