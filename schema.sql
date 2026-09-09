CREATE DATABASE IF NOT EXISTS `carestaff_os`;
USE `carestaff_os`;

-- Table for Contact Form Submissions
CREATE TABLE IF NOT EXISTS `contact_submissions` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `company_name` VARCHAR(255),
  `message` TEXT NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table for Blogs
CREATE TABLE IF NOT EXISTS `blogs` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL UNIQUE,
  `excerpt` TEXT,
  `content` LONGTEXT NOT NULL,
  `author_name` VARCHAR(100) NOT NULL,
  `cover_image` VARCHAR(255),
  `published_at` TIMESTAMP NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert dummy data for blogs
INSERT IGNORE INTO `blogs` (`title`, `slug`, `excerpt`, `content`, `author_name`) VALUES 
('How CareStaff OS Revolutionizes Care Homes', 'carestaff-os-revolution', 'Discover how an integrated 3-panel system changes the way care homes operate.', 'Full content goes here...', 'Admin'),
('The Importance of Family Portals in Social Care', 'family-portals-social-care', 'Transparency and communication with families is crucial. Learn how Panel C achieves this.', 'Full content goes here...', 'Admin');
