import { NextResponse } from 'next/server';
import pool from '@/lib/db/mysql';

export async function GET() {
  try {
    const result = await pool.query('SELECT 1 + 1 AS solution');
    let data = null;
    if (result && Array.isArray(result)) {
      data = result[0];
    }
    return NextResponse.json({ success: true, data: data, message: 'Database connected successfully!' });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to connect to the database. Please check your credentials in .env.local and ensure MAMP MySQL is running.' },
      { status: 500 }
    );
  }
}
