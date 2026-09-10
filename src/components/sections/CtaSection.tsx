import React from 'react';
import Link from 'next/link';

export function CtaSection() {
  return (
    <section className="bg-brand py-16 sm:py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="h-64 w-64 rounded-full bg-white opacity-10 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
        <div className="h-64 w-64 rounded-full bg-background opacity-20 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-background font-sans sm:text-4xl">
            Secure Your Founding Member Spot
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-background/80 font-serif">
            CareStaff OS is opening its closed beta to 100 forward-thinking UK care homes. Join the waitlist today for lifetime discounts and free data migration.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/pricing"
              className="rounded-xl bg-background px-8 py-4 text-base font-bold text-brand shadow-lg hover:bg-card-dark transition-all duration-300 hover:scale-105 font-sans"
            >
              Join the Waitlist
            </Link>
            <Link href="/contact" className="text-base font-bold leading-6 text-background hover:text-white transition-colors font-sans">
              Contact Sales <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
