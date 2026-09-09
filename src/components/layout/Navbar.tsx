import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/common/Button';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-serif font-bold text-brand tracking-tight">CareStaff OS</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-semibold text-foreground hover:text-brand transition-colors">Home</Link>
          <Link href="/about" className="text-sm font-semibold text-foreground hover:text-brand transition-colors">About</Link>
          <Link href="/features" className="text-sm font-semibold text-foreground hover:text-brand transition-colors">Features</Link>
          <Link href="/blogs" className="text-sm font-semibold text-foreground hover:text-brand transition-colors">Blogs</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden sm:block text-sm font-semibold text-foreground hover:text-brand transition-colors">Contact</Link>
          <Button href="/contact" variant="primary">Get a Demo</Button>
        </div>
      </div>
    </nav>
  );
}
