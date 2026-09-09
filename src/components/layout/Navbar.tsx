"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/common/Button';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl border-b border-border-dark">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-brand flex items-center justify-center shadow-[0_0_15px_rgba(0,210,170,0.4)]">
              <span className="text-background font-bold text-lg font-sans">C</span>
            </div>
            <span className="text-xl font-bold font-sans text-foreground tracking-tight">CareStaff<span className="text-brand">OS</span></span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-gray-400 hover:text-brand transition-colors">Home</Link>
            <Link href="/about" className="text-sm font-medium text-gray-400 hover:text-brand transition-colors">About</Link>
            <Link href="/features" className="text-sm font-medium text-gray-400 hover:text-brand transition-colors">Features</Link>
            <Link href="/blogs" className="text-sm font-medium text-gray-400 hover:text-brand transition-colors">Blogs</Link>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/contact" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Login</Link>
          <Button href="/contact" variant="primary" className="h-10 px-6 rounded-full shadow-[0_0_20px_rgba(0,210,170,0.3)] hover:shadow-[0_0_30px_rgba(0,210,170,0.5)]">
            Book a Demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            type="button" 
            className="text-gray-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (simplified) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card-dark border-b border-border-dark px-6 py-4 space-y-4">
          <Link href="/" className="block text-base font-medium text-gray-300 hover:text-brand">Home</Link>
          <Link href="/about" className="block text-base font-medium text-gray-300 hover:text-brand">About</Link>
          <Link href="/features" className="block text-base font-medium text-gray-300 hover:text-brand">Features</Link>
          <Link href="/blogs" className="block text-base font-medium text-gray-300 hover:text-brand">Blogs</Link>
          <Link href="/contact" className="block text-base font-medium text-brand">Book a Demo</Link>
        </div>
      )}
    </nav>
  );
}
