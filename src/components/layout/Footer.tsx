import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <span className="text-xl font-serif font-bold text-brand tracking-tight">CareStaff OS</span>
            <p className="mt-4 text-sm text-gray-500">
              The complete 3-panel ecosystem for modern care homes. Admin, Care Worker, and Family modules unified.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground">Product</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/features" className="text-sm text-gray-500 hover:text-brand">Admin & Business</Link></li>
              <li><Link href="/features" className="text-sm text-gray-500 hover:text-brand">Care Worker App</Link></li>
              <li><Link href="/features" className="text-sm text-gray-500 hover:text-brand">Family Portal</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-sm text-gray-500 hover:text-brand">About Us</Link></li>
              <li><Link href="/blogs" className="text-sm text-gray-500 hover:text-brand">Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-500 hover:text-brand">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-sm text-gray-500 hover:text-brand">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-brand">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-100 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} CareStaff OS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
