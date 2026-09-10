import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/common/Logo';
import { Button } from '@/components/common/Button';

export function Footer() {
  return (
    <footer className="bg-[#05080a] border-t border-border-dark pt-24 pb-12 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          
          {/* Brand & Newsletter - takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <Logo />
            </div>
            <p className="text-sm leading-relaxed text-gray-400 font-serif mb-8">
              The complete 3-panel ecosystem for modern care homes. Admin, Care Worker, and Family modules unified into one powerful platform.
            </p>
            
            <form className="mt-6 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-l-xl border-0 bg-card-dark px-4 py-3 text-base text-white shadow-sm ring-1 ring-inset ring-border-dark placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-brand sm:w-64 sm:text-sm sm:leading-6 transition-all duration-300"
                placeholder="Enter your email"
              />
              <div className="mt-4 sm:mt-0 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-r-xl bg-brand px-4 py-3 text-sm font-bold text-background shadow-sm hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand transition-all duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-1"></div> {/* Spacer */}

          {/* Product Links */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold leading-6 text-white font-sans tracking-widest uppercase">Product</h3>
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
              <li>
                <Link href="/features" className="text-sm leading-6 text-gray-400 hover:text-brand transition-colors">CQC Compliance</Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold leading-6 text-white font-sans tracking-widest uppercase">Company</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link href="/about" className="text-sm leading-6 text-gray-400 hover:text-brand transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/blogs" className="text-sm leading-6 text-gray-400 hover:text-brand transition-colors">Blog & News</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm leading-6 text-gray-400 hover:text-brand transition-colors">Contact Support</Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold leading-6 text-white font-sans tracking-widest uppercase">Legal</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link href="/privacy" className="text-sm leading-6 text-gray-400 hover:text-brand transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm leading-6 text-gray-400 hover:text-brand transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="#" className="text-sm leading-6 text-gray-400 hover:text-brand transition-colors">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-border-dark/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm leading-5 text-gray-500 font-serif">
            &copy; {new Date().getFullYear()} CareStaff OS. All rights reserved.
          </p>
          <div className="flex gap-6 items-center">
            <a href="#" className="text-gray-500 hover:text-brand transition-colors transform hover:scale-110">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-brand transition-colors transform hover:scale-110">
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
