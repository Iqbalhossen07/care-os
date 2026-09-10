import React from 'react';
import { Button } from '@/components/common/Button';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-32 lg:pt-32 lg:pb-40">
      {/* Intense glowing background blur (like Messzen) */}
      <div className="absolute top-1/4 left-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/4 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Side: Copy */}
          <div className="max-w-2xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft/50 border border-brand/20 px-3 py-1.5 text-sm font-medium text-brand shadow-[0_0_15px_rgba(0,210,170,0.15)] mb-8">
              <span className="flex h-1.5 w-1.5 rounded-full bg-brand animate-pulse"></span>
              The ultimate OS for care homes
            </div>

            {/* Headline */}
            <h1 className="font-sans text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-[4rem] leading-[1.1]">
              Put your mess<br />
              on autopilot.<br />
              <span className="text-brand">Care together better.</span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-6 text-lg leading-relaxed text-gray-400 font-serif max-w-xl">
              The only ecosystem built as three distinct panels. Connect your Admins, Care Workers, and Families in one unified, real-time platform. Say goodbye to scattered spreadsheets.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Button href="/contact" variant="primary" className="h-12 px-8 text-base rounded-full shadow-[0_0_20px_rgba(0,210,170,0.3)] hover:shadow-[0_0_30px_rgba(0,210,170,0.5)] hover:-translate-y-0.5 transition-all duration-300">
                Book a demo
              </Button>
              <a href="/features" className="text-sm font-medium text-gray-300 hover:text-white flex items-center gap-2 transition-colors group">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-border-dark group-hover:bg-gray-800 transition-colors">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                Explore features
              </a>
            </div>

            {/* User Trust */}
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-background object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150" alt="" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-background object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150" alt="" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-background object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" alt="" />
              </div>
              <div className="text-sm">
                <div className="flex text-brand">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-400 font-serif mt-1">Loved by 5,000+ care workers</p>
              </div>
            </div>
          </div>

          {/* Right Side: UI Dashboard Mockup */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            {/* The main dashboard container */}
            <div className="relative rounded-2xl bg-card-dark border border-border-dark p-2 shadow-2xl z-10 transform lg:-rotate-2 transition-transform duration-700 hover:rotate-0">
              <div className="rounded-xl overflow-hidden border border-border-dark/50 bg-[#0a0f12]">
                <img 
                  src="/hero-dashboard.jpg" 
                  alt="CareStaff OS Dashboard" 
                  className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Floating Element 1 */}
            <div className="absolute -left-12 top-1/4 rounded-xl bg-card-dark/90 border border-border-dark p-4 shadow-2xl z-20 w-48 backdrop-blur-xl animate-[bounce_5s_infinite]">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-brand/20 flex items-center justify-center border border-brand/30">
                  <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-serif">Shift Log</div>
                  <div className="text-sm font-bold text-white font-sans">Verified</div>
                </div>
              </div>
            </div>

            {/* Floating Element 2 */}
            <div className="absolute -right-8 bottom-1/4 rounded-xl bg-card-dark/90 border border-border-dark p-4 shadow-2xl z-20 w-60 backdrop-blur-xl animate-[bounce_6s_infinite_reverse]">
              <div className="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150" className="w-10 h-10 rounded-full object-cover border border-border-dark" />
                <div>
                  <div className="text-xs text-brand font-serif">Family Portal</div>
                  <div className="text-sm font-bold text-white font-sans">"Mom looks great!"</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
