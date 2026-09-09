import { NextResponse } from 'next/server';
import pool from '@/lib/db/mysql';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company_name, message } = body;

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Insert into database
    const query = `
      INSERT INTO contact_submissions (name, email, company_name, message)
      VALUES (?, ?, ?, ?)
    `;
    
    const result = await pool.execute(query, [
      name, 
      email, 
      company_name || null, 
      message
    ]);

    let data = null;
    if (result && Array.isArray(result)) {
      data = result[0];
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Your inquiry has been submitted successfully!',
      data: data 
    }, { status: 201 });

  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error while processing your request.' },
      { status: 500 }
    );
  }
}
