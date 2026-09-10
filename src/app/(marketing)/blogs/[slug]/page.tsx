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
  let relatedBlogs: any[] = [];
  
  try {
    const result = await pool.query(`SELECT * FROM blogs WHERE slug = ? LIMIT 1`, [slug]);
    if (result && Array.isArray(result)) {
      const blogs = result[0] as any[];
      if (blogs.length > 0) {
        blog = blogs[0];
      }
    }
    
    if (blog) {
      const relatedResult = await pool.query(`SELECT id, title, slug, excerpt, created_at FROM blogs WHERE slug != ? ORDER BY created_at DESC LIMIT 4`, [slug]);
      if (relatedResult && Array.isArray(relatedResult)) {
        relatedBlogs = relatedResult[0] as any[];
      }
    }
  } catch (error) {
    console.error('Error fetching blog data:', error);
  }

  if (!blog) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen px-6 py-16 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-brand/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-12">
          <Link href="/blogs" className="text-brand font-medium hover:text-brand-hover hover:underline transition-colors flex items-center gap-2">
            &larr; Back to all blogs
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT COLUMN: Main Blog Content */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 border border-brand/20 px-3 py-1 text-xs font-bold text-brand uppercase tracking-widest mb-6 shadow-inner">
              Insight
            </div>
            
            <h1 className="text-2xl md:text-4xl xl:text-4xl 2xl:text-4xl mt-2 font-extrabold tracking-tight text-white font-sans leading-tight">
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

            {/* Dynamic Cover Image based on blog ID using generated premium images */}
            <div className="w-full h-[400px] mt-12 rounded-[2rem] overflow-hidden border border-border-dark shadow-2xl relative group">
               <img 
                  src={[
                    '/blog_gen_1.jpg',
                    '/blog_gen_2.jpg',
                    '/blog_gen_3.jpg',
                    '/blog_gen_4.jpg'
                  ][(blog.id - 1) % 4]}
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80"></div>
            </div>
            
            <div className="mt-12">
              <p className="text-xl leading-relaxed text-gray-300 mb-10 font-medium font-serif border-l-4 border-brand pl-6">
                {blog.excerpt}
              </p>
              <div 
                className="text-gray-400 font-serif whitespace-pre-wrap leading-[1.9] text-lg space-y-6"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Related Blogs Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-12 bg-card-dark rounded-[2rem] border border-border-dark p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white font-sans border-b border-border-dark pb-4 mb-6">
                Related Articles
              </h3>
              
              <div className="space-y-8">
                {relatedBlogs.map((relatedPost, index) => (
                  <article key={relatedPost.id} className="group relative">
                    <div className="flex items-center gap-x-4 mb-2">
                      <time suppressHydrationWarning dateTime={relatedPost.created_at} className="text-gray-500 font-serif text-xs">
                        {new Date(relatedPost.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </time>
                    </div>
                    <h4 className="text-lg font-bold leading-snug text-white font-sans group-hover:text-brand transition-colors">
                      <Link href={`/blogs/${relatedPost.slug}`}>
                        <span className="absolute inset-0" />
                        {relatedPost.title}
                      </Link>
                    </h4>
                    <p className="mt-2 line-clamp-2 text-sm text-gray-400 font-serif">
                      {relatedPost.excerpt}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
