const mysql = require('mysql2/promise');
const fs = require('fs');
const env = fs.readFileSync('.env.local', 'utf-8');
env.split('\n').forEach(line => {
  const [key, value] = line.split('=');
  if (key && value) process.env[key] = value.trim();
});

async function testConnection() {
  console.log('Testing connection with:');
  console.log({
    host: process.env.MYSQL_HOST || '127.0.0.1',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'root',
    database: process.env.MYSQL_DATABASE || 'carestaff_os',
    port: parseInt(process.env.MYSQL_PORT || '8889', 10),
  });

  try {
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST || '127.0.0.1',
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || 'root',
      database: process.env.MYSQL_DATABASE || 'carestaff_os',
      port: parseInt(process.env.MYSQL_PORT || '8889', 10),
    });
    
    const schema = fs.readFileSync('schema.sql', 'utf-8');
    const queries = schema.split(';').filter(q => q.trim().length > 0);
    for (const query of queries) {
      if (query.trim()) {
        await connection.query(query);
      }
    }
    console.log('Successfully created tables and inserted demo data!');
    connection.end();
  } catch (error) {
    console.error('Connection failed:');
    console.error(error);
  }
}

testConnection();
