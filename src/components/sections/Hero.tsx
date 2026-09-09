import React from 'react';
import { Button } from '@/components/common/Button';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-brand-soft px-3 py-1 text-sm font-semibold text-brand mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand mr-2"></span>
              All-in-one care management platform
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-foreground leading-[1.1]">
              Put your care home on autopilot. <br className="hidden sm:block" />
              <span className="text-brand">Care better.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The only ecosystem built as three distinct panels. Connect your Admins, Care Workers, and Families in one unified, real-time platform.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" className="h-12 text-base px-8">
                Start for Free
              </Button>
              <Button href="/features" variant="ghost" className="h-12 text-base px-8 border border-gray-200">
                Explore Features
              </Button>
            </div>
            
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gray-200" />
                ))}
              </div>
              <p className="text-sm text-gray-500 font-medium">Trusted by 100+ care providers</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl bg-gray-50 border border-gray-100 shadow-xl overflow-hidden aspect-[4/3] flex items-center justify-center">
              {/* Placeholder for dashboard mockup */}
              <div className="text-center p-8">
                <div className="mx-auto h-16 w-16 bg-brand-soft rounded-xl flex items-center justify-center mb-4">
                  <span className="text-brand font-bold text-xl">OS</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Interactive Dashboard Preview</h3>
                <p className="text-gray-500 mt-2">Pixel-perfect UI mockups will go here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
