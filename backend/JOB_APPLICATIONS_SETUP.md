# Job Applications Setup

## Database Setup

Run this SQL to create the job applications table:

```sql
CREATE TABLE IF NOT EXISTS job_applications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  position VARCHAR(255) NOT NULL,
  message TEXT,
  resume_filename VARCHAR(255),
  resume_path VARCHAR(512),
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_position (position),
  INDEX idx_submitted (submitted_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

## Manual Setup

1. Open your MySQL client or phpMyAdmin
2. Select your database (veemag_db)
3. Run the SQL command above

## OR Use MySQL Command Line

```bash
mysql -u root -p veemag_db < backend/sql/job_applications.sql
```

## Features

- Resume upload (PDF, DOC, DOCX - Max 5MB)
- Email notifications via Resend API
- Form validation
- All application data stored in database
- Beautiful modal interface

## API Endpoints

- `POST /api/careers/apply` - Submit job application
- `GET /api/careers/applications` - Get all applications (admin)

## Frontend Usage

The JobApplicationForm component is integrated into the CareersPage. When users click "Apply Now" on any job listing or "Send an open application", a modal opens with the form.

## Email Notifications

When an application is submitted, an email is sent to the configured EMAIL_TO address (from .env) with:
- Applicant details
- Position applied for
- Resume attached
- Why they want to join

The email uses the existing Resend API configuration.
