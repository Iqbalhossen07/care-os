import React from 'react';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { MobileFeature } from '@/components/sections/MobileFeature';
import { FamilyPortalFeature } from '@/components/sections/FamilyPortalFeature';
import { CtaSection } from '@/components/sections/CtaSection';

export const metadata = {
  title: 'Features | CareStaff OS',
  description: 'Explore the features of the Admin Panel, Care Worker App, and Family Portal.',
};

export default function FeaturesPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="bg-background py-12 text-center px-6 border-b border-border-dark relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-brand/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="relative z-10">
          <h1 className="text-2xl md:text-4xl xl:text-4xl 2xl:text-4xl font-extrabold tracking-tight text-white font-sans">
            One Ecosystem. <span className="text-brand">Three Experiences.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400 font-serif">
            Discover how CareStaff OS provides dedicated, purpose-built interfaces for every stakeholder in your care business.
          </p>
        </div>
      </section>

      {/* Sections */}
      <FeatureGrid />
      <MobileFeature />
      <FamilyPortalFeature />
      <CtaSection />
    </div>
  );
}
