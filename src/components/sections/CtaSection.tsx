import React from 'react';
import { Button } from '@/components/common/Button';

export function CtaSection() {
  return (
    <section className="bg-background relative border-t border-border-dark overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 relative">
        <div className="relative flex flex-col items-center justify-center rounded-[3rem] bg-card-dark border border-border-dark px-6 py-20 text-center shadow-2xl overflow-hidden overflow-hidden">
          {/* Inner Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-64 bg-brand/30 rounded-full blur-[100px] pointer-events-none"></div>

          <h2 className="text-2xl md:text-4xl xl:text-4xl 2xl:text-4xl relative z-10 font-sans font-extrabold tracking-tight text-white mb-6">
            Ready to transform your care home?
          </h2>
          <p className="relative z-10 mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 font-serif mb-12">
            Join the hundreds of forward-thinking care providers using CareStaff OS to deliver better care, ensure compliance, and connect families.
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button href="/contact" variant="primary" className="rounded-full shadow-[0_0_30px_rgba(0,210,170,0.4)] hover:shadow-[0_0_50px_rgba(0,210,170,0.6)] hover:-translate-y-1 transition-all duration-300">
              Book a free demo
            </Button>
            <Button href="/about" variant="outline" className="rounded-full border-gray-600 bg-transparent text-white hover:bg-gray-800 transition-all duration-300">
              Learn more about us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
