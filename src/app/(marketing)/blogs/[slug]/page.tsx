import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import pool from '@/lib/db/mysql';

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const [rows] = await pool.query(`SELECT title, excerpt FROM blogs WHERE slug = ? LIMIT 1`, [slug]);
    const blogs = rows as any[];
    if (blogs.length === 0) return { title: 'Not Found' };
    return { title: `${blogs[0].title} | CareStaff OS`, description: blogs[0].excerpt };
  } catch (error) {
    return { title: 'Blog' };
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  let blog = null;
  try {
    const [rows] = await pool.query(`SELECT * FROM blogs WHERE slug = ? LIMIT 1`, [slug]);
    const blogs = rows as any[];
    if (blogs.length > 0) {
      blog = blogs[0];
    }
  } catch (error) {
    console.error('Error fetching single blog:', error);
  }

  if (!blog) {
    notFound();
  }

  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <div className="mb-8">
          <Link href="/blogs" className="text-brand font-semibold hover:underline">
            &larr; Back to all blogs
          </Link>
        </div>
        
        <p className="text-base font-semibold leading-7 text-brand">Insight</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-5xl font-serif">
          {blog.title}
        </h1>
        <div className="mt-6 flex items-center gap-x-4 border-b border-gray-100 pb-8">
          <div className="h-12 w-12 rounded-full bg-brand flex items-center justify-center text-white font-bold text-xl">
            {blog.author_name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-foreground">{blog.author_name}</p>
            <p suppressHydrationWarning className="text-sm text-gray-500">
              Published on {new Date(blog.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
        
        <div className="mt-10 max-w-2xl">
          <p className="text-xl leading-8 text-gray-900 mb-8 font-medium">
            {blog.excerpt}
          </p>
          <div 
            className="text-gray-700 whitespace-pre-wrap leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>
    </div>
  );
}
