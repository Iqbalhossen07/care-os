import React from 'react';
import { HiOutlineCheckCircle } from 'react-icons/hi2';
import { Button } from '@/components/common/Button';

export function FamilyPortalFeature() {
  return (
    <section className="overflow-hidden bg-background py-24 sm:py-32 relative border-t border-border-dark">
      {/* Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-12 items-center">
          
          {/* Left: UI Tablet Mockup */}
          <div className="relative lg:col-span-7 lg:order-last lg:w-[115%] lg:-ml-4 z-10">
            {/* Outer Tablet Frame */}
            <div className="relative rounded-[2rem] bg-[#05080a] p-3 shadow-2xl border border-border-dark ring-1 ring-white/5 transform lg:-rotate-2 transition-transform duration-700 hover:rotate-0 hover:shadow-[0_0_80px_rgba(59,130,246,0.15)] group z-10">
              
              {/* Screen Content */}
              <div className="relative rounded-[1.5rem] overflow-hidden bg-background w-full border border-gray-800/80">
                <img 
                  src="/family-portal-mockup.jpg" 
                  alt="Family Portal UI Mockup" 
                  className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-[1.02] transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Floating UI Elements over image */}
              <div className="absolute -bottom-4 -left-2 sm:-bottom-8 sm:-left-8 right-4 sm:right-10">
                <div className="relative z-20 p-4 sm:p-5 rounded-2xl bg-card-dark/95 backdrop-blur-xl border border-border-dark shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex items-center gap-3 sm:gap-4 animate-[bounce_5s_infinite]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shadow-inner">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                  </div>
                  <div>
                    <p className="font-sans font-bold text-white tracking-tight">Timeline Update</p>
                    <p className="text-sm text-gray-400 font-serif mt-1 italic">"Had a wonderful afternoon in the garden."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="lg:col-span-5 lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-sm font-medium text-blue-400 mb-4 shadow-inner">
                Family Portal
              </div>
              <h2 className="text-2xl md:text-4xl xl:text-4xl 2xl:text-4xl font-sans font-extrabold tracking-tight text-white leading-[1.1]">
                Keep families connected. <span className="block mt-1">Transparent & secure.</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-400 font-serif">
                Provide peace of mind to families while reducing phone calls to your front desk. The Family Portal gives loved ones a secure, consent-gated view into the resident's daily life.
              </p>
              
              <div className="mt-8 space-y-6 text-base leading-7 text-gray-400 font-serif">
                <div className="flex gap-4 group">
                  <div className="flex-none mt-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors shadow-inner">
                      <HiOutlineCheckCircle className="h-5 w-5 text-blue-400" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <strong className="font-semibold text-white font-sans text-lg">Timeline & Photos.</strong> Share moments and non-clinical daily updates automatically from the Care App.
                  </div>
                </div>
                
                <div className="flex gap-4 group">
                  <div className="flex-none mt-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors shadow-inner">
                      <HiOutlineCheckCircle className="h-5 w-5 text-blue-400" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <strong className="font-semibold text-white font-sans text-lg">Direct Messaging.</strong> Secure two-way communication routed to your admin team, keeping everything in one system.
                  </div>
                </div>
                
                <div className="flex gap-4 group">
                  <div className="flex-none mt-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors shadow-inner">
                      <HiOutlineCheckCircle className="h-5 w-5 text-blue-400" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <strong className="font-semibold text-white font-sans text-lg">Invoicing & Payments.</strong> Families can view ledger balances and pay invoices directly via Stripe integrations.
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button href="/features" variant="outline" className="border-border-dark text-white hover:bg-border-dark hover:border-blue-400">
                  Open Family Portal
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
