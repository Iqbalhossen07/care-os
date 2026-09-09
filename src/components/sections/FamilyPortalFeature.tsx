import React from 'react';
import { Button } from '@/components/common/Button';

export function FamilyPortalFeature() {
  return (
    <section className="overflow-hidden bg-background py-24 sm:py-32 relative border-t border-border-dark">
      {/* Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          
          <div className="relative lg:order-last">
            <div className="relative rounded-3xl bg-card-dark border border-border-dark shadow-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1000" 
                alt="Family looking at tablet" 
                className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
              
              {/* Floating UI Elements over image */}
              <div className="absolute bottom-10 left-10 right-10">
                <div className="relative z-10 p-6 rounded-2xl bg-card-dark/80 backdrop-blur-xl border border-border-dark shadow-2xl flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/20 border border-brand/30 text-brand">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                  </div>
                  <div>
                    <p className="font-sans font-bold text-white">Timeline Update</p>
                    <p className="text-sm text-gray-400 font-serif">"Had a wonderful afternoon in the garden."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <div className="inline-flex items-center gap-2 rounded-full bg-border-dark px-3 py-1 text-sm font-medium text-blue-400 mb-6">
                Family Portal
              </div>
              <h2 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
                Keep families connected. <br/>Transparent & secure.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-400 font-serif">
                Provide peace of mind to families while reducing phone calls to your front desk. The Family Portal gives loved ones a secure, consent-gated view into the resident's daily life.
              </p>
              
              <div className="mt-10 space-y-8 text-base leading-7 text-gray-400 font-serif">
                <div className="flex gap-4">
                  <div className="flex-none mt-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20">
                      <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    </div>
                  </div>
                  <div>
                    <strong className="font-semibold text-white font-sans">Timeline & Photos.</strong> Share moments and non-clinical daily updates automatically from the Care App.
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-none mt-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20">
                      <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    </div>
                  </div>
                  <div>
                    <strong className="font-semibold text-white font-sans">Direct Messaging.</strong> Secure two-way communication routed to your admin team, keeping everything in one system.
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-none mt-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20">
                      <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    </div>
                  </div>
                  <div>
                    <strong className="font-semibold text-white font-sans">Invoicing & Payments.</strong> Families can view ledger balances and pay invoices directly via Stripe integrations.
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
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
