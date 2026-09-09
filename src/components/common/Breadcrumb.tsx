"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Breadcrumb() {
  const pathname = usePathname();
  
  // Do not render on home page
  if (pathname === '/') return null;

  const pathNames = pathname.split('/').filter((path) => path);

  return (
    <div className="w-full bg-background pt-6 pb-2 border-b border-border-dark/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <nav className="flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-400 hover:text-brand transition-colors text-sm font-medium">
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
                    <svg className="h-4 w-4 flex-shrink-0 text-gray-600 mx-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                    </svg>
                    {isLast ? (
                      <span className="ml-1 text-sm font-semibold text-brand" aria-current="page">
                        {title}
                      </span>
                    ) : (
                      <Link href={href} className="ml-1 text-sm font-medium text-gray-400 hover:text-brand transition-colors">
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
