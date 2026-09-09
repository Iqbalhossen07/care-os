import { NextResponse } from 'next/server';
import pool from '@/lib/db/mysql';

export async function GET() {
  try {
    // Fetch all blogs ordered by created date
    const [rows] = await pool.query(`
      SELECT id, title, slug, excerpt, author_name, cover_image, published_at, created_at 
      FROM blogs 
      ORDER BY created_at DESC
    `);
    
    return NextResponse.json({ 
      success: true, 
      data: rows 
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch blogs.' },
      { status: 500 }
    );
  }
}
