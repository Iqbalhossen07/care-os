"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Breadcrumb() {
  const pathname = usePathname();
  
  // Do not render on home page
  if (pathname === '/') return null;

  const pathNames = pathname.split('/').filter((path) => path);
  const rootPath = pathNames[0];

  // Map root paths to their respective header images and titles
  let bgImage = '/header_about.jpg';
  let pageTitle = 'About Us';

  if (rootPath === 'features') {
    bgImage = '/header_features.jpg';
    pageTitle = 'Platform Features';
  } else if (rootPath === 'blogs') {
    bgImage = '/header_blogs.jpg';
    pageTitle = pathNames.length > 1 ? 'Blog Details' : 'Our Blog';
  } else if (rootPath === 'contact') {
    bgImage = '/header_contact.jpg';
    pageTitle = 'Contact Us';
  } else if (rootPath === 'privacy') {
    bgImage = '/auth_cover.jpg';
    pageTitle = 'Privacy Policy';
  } else if (rootPath === 'terms') {
    bgImage = '/auth_cover.jpg';
    pageTitle = 'Terms of Service';
  }

  return (
    <div className="relative w-full h-[300px] flex flex-col justify-end overflow-hidden border-b border-border-dark shadow-2xl">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      
      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
      <div className="absolute inset-0 bg-brand/10 mix-blend-multiply"></div>

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8 pb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-white font-sans mb-4 drop-shadow-md">
          {pageTitle}
        </h1>
        
        <nav className="flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-300 hover:text-brand transition-colors text-sm font-medium drop-shadow-md">
                Home
              </Link>
            </li>
            {pathNames.map((link, index) => {
              const href = `/${pathNames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathNames.length - 1;
              const title = link.charAt(0).toUpperCase() + link.slice(1).replace(/-/g, ' ');

              return (
                <li key={link}>
                  <div className="flex items-center">
                    <svg className="h-4 w-4 flex-shrink-0 text-gray-500 mx-1 drop-shadow-md" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                    </svg>
                    {isLast ? (
                      <span className="ml-1 text-sm font-semibold text-brand drop-shadow-md" aria-current="page">
                        {title}
                      </span>
                    ) : (
                      <Link href={href} className="ml-1 text-sm font-medium text-gray-300 hover:text-brand transition-colors drop-shadow-md">
                        {title}
                      </Link>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}
