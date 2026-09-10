import mysql from 'mysql2/promise';

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'root',
  database: process.env.MYSQL_DATABASE || 'carestaff_os',
  port: parseInt(process.env.MYSQL_PORT || '3306', 10), // MAMP default is often 8889, sometimes 3306
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
