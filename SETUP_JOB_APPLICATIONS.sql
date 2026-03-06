-- Quick setup for job applications table
-- Run this in your MySQL database (veemag_db)

USE veemag_db;

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

-- Verify table creation
DESCRIBE job_applications;

-- Test query
SELECT COUNT(*) as application_count FROM job_applications;
