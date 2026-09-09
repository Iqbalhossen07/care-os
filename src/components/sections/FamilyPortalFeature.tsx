import React from 'react';
import { Button } from '@/components/common/Button';
import Image from 'next/image';

export function FamilyPortalFeature() {
  return (
    <section className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          
          <div className="relative lg:order-last">
            <div className="relative rounded-3xl bg-gray-50 border border-gray-100 shadow-xl overflow-hidden aspect-[4/3] flex items-center justify-center">
               <img 
                 src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1000" 
                 alt="Family visiting senior resident" 
                 className="absolute inset-0 h-full w-full object-cover opacity-80"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
               <div className="relative z-10 text-center p-8 mt-auto w-full">
                 <div className="mx-auto h-12 w-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4">
                   <span className="text-white font-bold text-lg">C</span>
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">Timeline Updates</h3>
                 <div className="w-3/4 mx-auto h-2 bg-white/30 rounded-full mb-2"></div>
                 <div className="w-1/2 mx-auto h-2 bg-white/30 rounded-full"></div>
               </div>
            </div>
          </div>

          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-brand">Family Portal</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif">
                Keep families connected. <br/> Transparent & secure.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Provide peace of mind to families while reducing phone calls to your front desk. The Family Portal gives loved ones a secure, consent-gated view into the resident's daily life.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-foreground">
                    <span className="absolute left-1 top-1 h-5 w-5 text-brand">✓</span>
                    Timeline & Photos.
                  </dt>
                  <dd className="inline"> Share moments and non-clinical daily updates automatically filtered from the Care App.</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-foreground">
                    <span className="absolute left-1 top-1 h-5 w-5 text-brand">✓</span>
                    Direct Messaging.
                  </dt>
                  <dd className="inline"> Secure two-way communication routed to your admin team, keeping everything in one system.</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-foreground">
                    <span className="absolute left-1 top-1 h-5 w-5 text-brand">✓</span>
                    Invoicing & Payments.
                  </dt>
                  <dd className="inline"> Families can view ledger balances and pay invoices directly via Stripe integration.</dd>
                </div>
              </dl>
              <div className="mt-10">
                <Button href="/features" variant="outline">Learn about the Portal</Button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
