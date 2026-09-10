import React from 'react';
import Link from 'next/link';
import pool from '@/lib/db/mysql';

export const revalidate = 60;

export const metadata = {
  title: 'Blog | CareStaff OS',
  description: 'Latest insights, updates, and news from CareStaff OS.',
};

export default async function BlogsPage() {
  let blogs: any[] = [];
  let dbError = false;

  try {
    const result = await pool.query(`
      SELECT id, title, slug, excerpt, author_name, created_at 
      FROM blogs 
      ORDER BY created_at DESC
    `);
    if (result && Array.isArray(result)) {
      blogs = result[0] as any[];
    }
  } catch (error) {
    console.error('Failed to fetch blogs from database:', error);
    dbError = true;
  }

  return (
    <div className="bg-background min-h-screen py-16 sm:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-sans mb-6">The CareStaff Blog</h1>
          <p className="mt-2 text-lg leading-8 text-gray-400 font-serif">
            Insights on modernizing social care, compliance tips, and product updates.
          </p>
        </div>

        {dbError && (
          <div className="mt-8 bg-red-900/20 p-8 rounded-3xl border border-red-900/50 text-center mx-auto max-w-2xl shadow-xl backdrop-blur-md">
            <h3 className="text-red-400 font-bold mb-3 text-xl font-sans">Database Connection Error</h3>
            <p className="text-gray-400 text-sm font-serif leading-relaxed">
              Could not connect to MySQL. Ensure you have run the schema.sql in MAMP and updated your .env.local file with the correct credentials.
            </p>
          </div>
        )}

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogs.length === 0 && !dbError ? (
            <div className="col-span-full text-center text-gray-500 py-12 font-serif">
              No blog posts found. Please add some via your database.
            </div>
          ) : (
            blogs.map((post, index) => {
              // Array of premium generated images
              const coverImages = [
                '/blog_gen_1.jpg',
                '/blog_gen_2.jpg',
                '/blog_gen_3.jpg',
                '/blog_gen_4.jpg'
              ];
              const imageUrl = coverImages[index % coverImages.length];

              return (
                <article key={post.id} className="flex flex-col items-start justify-between bg-card-dark rounded-[2rem] border border-border-dark transition-all duration-300 hover:border-brand/40 hover:shadow-[0_0_30px_rgba(0,210,170,0.1)] group relative overflow-hidden">
                  <div className="w-full h-48 overflow-hidden relative border-b border-border-dark">
                    <img 
                      src={imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent opacity-80"></div>
                  </div>
                  
                  <div className="p-8 w-full flex-1 flex flex-col">
                    <div className="flex items-center gap-x-4 text-xs mb-6 w-full justify-between">
                      <span className="relative z-10 rounded-full bg-brand/10 px-3 py-1.5 font-medium text-brand border border-brand/20">
                        Insight
                      </span>
                      <time suppressHydrationWarning dateTime={post.created_at} className="text-gray-500 font-serif">
                        {new Date(post.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </time>
                    </div>
                    
                    <div className="group relative flex-1">
                      <h3 className="mt-2 text-2xl font-bold leading-tight text-white font-sans group-hover:text-brand transition-colors">
                        <Link href={`/blogs/${post.slug}`}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </Link>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-relaxed text-gray-400 font-serif">
                        {post.excerpt}
                      </p>
                    </div>
                    
                    <div className="relative mt-8 flex items-center justify-between border-t border-border-dark/50 pt-6 w-full">
                      <div className="flex items-center gap-x-4">
                        <div className="h-10 w-10 rounded-full bg-border-dark border border-gray-700 flex items-center justify-center text-white font-bold font-sans shadow-inner">
                          {post.author_name.charAt(0)}
                        </div>
                        <div className="text-sm leading-6">
                          <p className="font-bold text-white font-sans">
                            {post.author_name}
                          </p>
                          <p className="text-gray-500 font-serif text-xs">CareStaff Team</p>
                        </div>
                      </div>
                      
                      {/* Details Button */}
                      <Link 
                        href={`/blogs/${post.slug}`} 
                        className="relative z-10 inline-flex items-center justify-center rounded-full bg-border-dark px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-brand hover:text-background shadow-md border border-gray-700 hover:border-brand"
                      >
                        Read Details &rarr;
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
