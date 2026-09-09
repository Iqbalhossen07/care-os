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
    <div className="bg-white">
      {/* Header */}
      <section className="bg-brand-soft py-20 text-center px-6">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-serif">
          One Ecosystem. Three Experiences.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Discover how CareStaff OS provides dedicated, purpose-built interfaces for every stakeholder in your care business.
        </p>
      </section>

      {/* Sections */}
      <FeatureGrid />
      
      <div className="border-t border-gray-100">
        <MobileFeature />
      </div>
      
      <div className="border-t border-gray-100">
        <FamilyPortalFeature />
      </div>

      <CtaSection />
    </div>
  );
}
