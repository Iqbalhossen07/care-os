import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border-dark pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded bg-brand flex items-center justify-center shadow-[0_0_15px_rgba(0,210,170,0.4)]">
                <span className="text-background font-bold text-lg font-sans">C</span>
              </div>
              <span className="text-xl font-bold font-sans text-white tracking-tight">CareStaff<span className="text-brand">OS</span></span>
            </Link>
            <p className="text-sm leading-6 text-gray-500 font-serif">
              The complete 3-panel ecosystem for modern care homes. Admin, Care Worker, and Family modules unified.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white font-sans tracking-wide">Product</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link href="/features" className="text-sm leading-6 text-gray-400 hover:text-brand transition-colors">Admin & Business</Link>
              </li>
              <li>
                <Link href="/features" className="text-sm leading-6 text-gray-400 hover:text-brand transition-colors">Care Worker App</Link>
              </li>
              <li>
                <Link href="/features" className="text-sm leading-6 text-gray-400 hover:text-brand transition-colors">Family Portal</Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white font-sans tracking-wide">Company</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link href="/about" className="text-sm leading-6 text-gray-400 hover:text-brand transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/blogs" className="text-sm leading-6 text-gray-400 hover:text-brand transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm leading-6 text-gray-400 hover:text-brand transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white font-sans tracking-wide">Legal</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link href="#" className="text-sm leading-6 text-gray-400 hover:text-brand transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="text-sm leading-6 text-gray-400 hover:text-brand transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border-dark pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs leading-5 text-gray-500 font-serif">
            &copy; {new Date().getFullYear()} CareStaff OS. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-brand transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-brand transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
