import React from 'react';
import { Button } from '@/components/common/Button';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-48 lg:pb-32">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] opacity-40 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/30 rounded-full blur-[100px] mix-blend-multiply"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-300/30 rounded-full blur-[100px] mix-blend-multiply"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="mb-10 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-2 text-sm font-semibold text-brand shadow-sm ring-1 ring-brand/10 transition-all duration-300 hover:ring-brand/30 hover:bg-brand-soft/80 cursor-default">
            <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse"></span>
            The Next-Generation Care Management Platform
          </span>
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-4xl font-sans text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl leading-[1.15]">
          Put your care home on autopilot. <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-blue-600">Care better.</span>
        </h1>

        {/* Sub-headline */}
        <p className="mx-auto mt-8 max-w-2xl font-serif text-lg leading-relaxed text-gray-600 sm:text-xl">
          The only ecosystem built as three distinct panels. Connect your Admins, Care Workers, and Families in one unified, real-time platform.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button href="/contact" variant="primary" className="h-14 px-8 text-lg rounded-xl shadow-xl shadow-brand/20 hover:-translate-y-1 hover:shadow-brand/40 transition-all duration-300">
            Start for Free
          </Button>
          <Button href="/features" variant="outline" className="h-14 px-8 text-lg rounded-xl border-gray-200 bg-white/50 backdrop-blur-sm hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300 shadow-sm">
            Explore Features
          </Button>
        </div>

        {/* Social Proof */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <div className="flex -space-x-4">
            <img className="inline-block h-12 w-12 rounded-full ring-4 ring-white shadow-md object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150" alt="" />
            <img className="inline-block h-12 w-12 rounded-full ring-4 ring-white shadow-md object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150" alt="" />
            <img className="inline-block h-12 w-12 rounded-full ring-4 ring-white shadow-md object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" alt="" />
            <img className="inline-block h-12 w-12 rounded-full ring-4 ring-white shadow-md object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" alt="" />
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 ring-4 ring-white shadow-md">
              <span className="text-sm font-bold text-gray-600">5k+</span>
            </div>
          </div>
          <p className="font-serif text-sm font-medium text-gray-500">Trusted by over 5,000 care professionals</p>
        </div>
      </div>

      {/* Floating Mockup / Image */}
      <div className="relative mx-auto mt-24 max-w-6xl px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-[3rem] lg:p-4 shadow-2xl transition-all duration-700 hover:shadow-brand/20 group">
          <div className="overflow-hidden rounded-2xl bg-white lg:rounded-[2.5rem] relative aspect-[16/9]">
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=2000" 
              alt="Care worker using tablet" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            
            {/* Glassmorphism Overlay Element */}
            <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 max-w-sm rounded-2xl bg-white/70 backdrop-blur-xl p-6 shadow-2xl ring-1 ring-white/50 transition-transform duration-500 hover:-translate-y-2">
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand to-blue-600 text-white shadow-lg">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans font-extrabold text-gray-900 text-lg tracking-tight">Shift Completed</p>
                  <p className="font-serif text-sm text-gray-600 mt-1">All eMAR logs verified securely.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
