import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import pool from '@/lib/db/mysql';

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const result = await pool.query(`SELECT title, excerpt FROM blogs WHERE slug = ? LIMIT 1`, [slug]);
    if (result && Array.isArray(result)) {
      const blogs = result[0] as any[];
      if (blogs.length === 0) return { title: 'Not Found' };
      return { title: `${blogs[0].title} | CareStaff OS`, description: blogs[0].excerpt };
    }
    return { title: 'Not Found' };
  } catch (error) {
    return { title: 'Blog' };
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  let blog = null;
  try {
    const result = await pool.query(`SELECT * FROM blogs WHERE slug = ? LIMIT 1`, [slug]);
    if (result && Array.isArray(result)) {
      const blogs = result[0] as any[];
      if (blogs.length > 0) {
        blog = blogs[0];
      }
    }
  } catch (error) {
    console.error('Error fetching single blog:', error);
  }

  if (!blog) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen px-6 py-16 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="mx-auto max-w-3xl relative z-10">
        <div className="mb-12">
          <Link href="/blogs" className="text-brand font-medium hover:text-brand-hover hover:underline transition-colors flex items-center gap-2">
            &larr; Back to all blogs
          </Link>
        </div>
        
        <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 border border-brand/20 px-3 py-1 text-xs font-bold text-brand uppercase tracking-widest mb-6">
          Insight
        </div>
        
        
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-sans leading-tight">
          {blog.title}
        </h1>
        
        <div className="mt-10 flex items-center gap-x-5 border-b border-border-dark pb-10">
          <div className="h-14 w-14 rounded-full bg-border-dark border border-gray-700 flex items-center justify-center text-white font-bold text-xl font-sans shadow-inner">
            {blog.author_name.charAt(0)}
          </div>
          <div>
            <p className="font-bold text-white text-lg font-sans">{blog.author_name}</p>
            <p suppressHydrationWarning className="text-sm text-gray-500 font-serif">
              Published on {new Date(blog.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>

        {/* Dynamic Cover Image based on slug length just to be deterministic */}
        <div className="w-full h-[400px] mt-12 rounded-[2rem] overflow-hidden border border-border-dark shadow-2xl relative">
           <img 
              src={`https://images.unsplash.com/photo-${blog.slug.length % 2 === 0 ? '1576091160399-112ba8d25d1d' : '1551076805-e18690c5e451'}?auto=format&fit=crop&q=80&w=1200`} 
              alt={blog.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
        </div>
        
        <div className="mt-12">
          <p className="text-xl leading-relaxed text-gray-300 mb-10 font-medium font-serif border-l-4 border-brand pl-6">
            {blog.excerpt}
          </p>
          <div 
            className="text-gray-400 font-serif whitespace-pre-wrap leading-[1.8] text-lg space-y-6"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>
    </div>
  );
}
