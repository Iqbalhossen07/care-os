import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/common/Logo';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background text-foreground font-sans">
      {/* LEFT: Auth Form Container */}
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:w-1/2 lg:px-20 xl:px-24 relative overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand/5 rounded-full blur-[150px] pointer-events-none z-0"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

        <div className="mx-auto w-full max-w-sm lg:w-96 relative z-10">
          <div>
            <div className="mb-10">
              <Logo />
            </div>
          </div>
          
          {children}

        </div>
      </div>

      {/* RIGHT: Beautiful Image Cover */}
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className="absolute inset-0 h-full w-full bg-card-dark">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="/auth_cover.jpg"
            alt="CareStaff OS Data Center"
          />
          {/* Gradient Overlay to fade into the black background */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent opacity-90"></div>
          
          {/* Floating UI Element on Image */}
          <div className="absolute bottom-12 right-12 p-8 rounded-3xl bg-card-dark/60 backdrop-blur-2xl border border-border-dark shadow-2xl max-w-sm">
            <div className="flex gap-4 items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand/20 border border-brand/30 text-brand shadow-inner">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div>
                <p className="font-bold text-white font-sans text-lg tracking-tight">Bank-Grade Security</p>
                <p className="text-gray-400 font-serif text-sm mt-1 leading-relaxed">
                  All clinical and operational data is encrypted at rest and in transit, ensuring complete CQC compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
