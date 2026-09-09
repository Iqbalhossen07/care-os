import React from 'react';
import Link from 'next/link';
import pool from '@/lib/db/mysql';

// Tell Next.js to revalidate this page occasionally or fetch dynamically
export const revalidate = 60; // revalidate every 60 seconds

export const metadata = {
  title: 'Blog | CareStaff OS',
  description: 'Latest insights, updates, and news from CareStaff OS.',
};

export default async function BlogsPage() {
  let blogs: any[] = [];
  let dbError = false;

  try {
    const [rows] = await pool.query(`
      SELECT id, title, slug, excerpt, author_name, created_at 
      FROM blogs 
      ORDER BY created_at DESC
    `);
    blogs = rows as any[];
  } catch (error) {
    console.error('Failed to fetch blogs from database:', error);
    dbError = true;
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif">The CareStaff Blog</h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Insights on modernizing social care, compliance tips, and product updates.
          </p>
        </div>

        {dbError && (
          <div className="mt-16 bg-red-50 p-6 rounded-xl border border-red-100 text-center mx-auto max-w-2xl">
            <h3 className="text-red-800 font-bold mb-2">Database Connection Error</h3>
            <p className="text-red-700 text-sm">
              Could not connect to MySQL. Ensure you have run the schema.sql in MAMP and updated your .env.local file with the correct credentials.
            </p>
          </div>
        )}

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogs.length === 0 && !dbError ? (
            <div className="col-span-full text-center text-gray-500 py-12">
              No blog posts found. Please add some via your database.
            </div>
          ) : (
            blogs.map((post) => (
              <article key={post.id} className="flex flex-col items-start justify-between bg-gray-50 rounded-3xl p-8 border border-gray-100 transition hover:shadow-md">
                <div className="flex items-center gap-x-4 text-xs">
                  <time suppressHydrationWarning dateTime={post.created_at} className="text-gray-500">
                    {new Date(post.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </time>
                  <span className="relative z-10 rounded-full bg-white px-3 py-1.5 font-medium text-gray-600 border border-gray-200">
                    Insight
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-6 text-xl font-semibold leading-6 text-foreground font-serif group-hover:text-brand">
                    <Link href={`/blogs/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.excerpt}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="h-10 w-10 rounded-full bg-brand flex items-center justify-center text-white font-bold">
                    {post.author_name.charAt(0)}
                  </div>
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-foreground">
                      {post.author_name}
                    </p>
                    <p className="text-gray-600">CareStaff Team</p>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
