import React from 'react';
import { Button } from '@/components/common/Button';

export function CtaSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col items-center justify-center rounded-3xl bg-brand px-6 py-20 text-center sm:px-16 shadow-lg">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">
            Ready to transform your care home?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-brand-soft">
            Join hundreds of forward-thinking care providers using CareStaff OS to deliver better care, ensure compliance, and connect families.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button href="/contact" className="bg-white text-brand hover:bg-gray-50 h-12 px-8 text-base">
              Book a free demo
            </Button>
            <a href="/about" className="text-sm font-semibold leading-6 text-white hover:text-brand-soft transition-colors">
              Learn more about us <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
