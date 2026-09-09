import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { StatsSection } from '@/components/sections/StatsSection';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { MobileFeature } from '@/components/sections/MobileFeature';
import { FamilyPortalFeature } from '@/components/sections/FamilyPortalFeature';
import { Testimonials } from '@/components/sections/Testimonials';
import { CtaSection } from '@/components/sections/CtaSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      
      {/* Three Panel Feature Overview */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif">Three Panels. One Ecosystem.</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Unlike other software, CareStaff OS provides dedicated, purpose-built interfaces for every stakeholder in your care business.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              
              {/* Panel A */}
              <div className="flex flex-col bg-white rounded-2xl p-8 shadow-sm border border-gray-100 transition hover:shadow-md">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft">
                  <span className="text-brand font-bold text-lg">A</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Admin & Business Panel</h3>
                <p className="mt-4 flex-auto text-base leading-7 text-gray-600">
                  A powerful web app with role-based permissions. Manage eMAR, HR, kitchen, maintenance, and CQC compliance in one place.
                </p>
              </div>

              {/* Panel B */}
              <div className="flex flex-col bg-white rounded-2xl p-8 shadow-sm border border-gray-100 transition hover:shadow-md">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft">
                  <span className="text-brand font-bold text-lg">B</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Care Worker PWA</h3>
                <p className="mt-4 flex-auto text-base leading-7 text-gray-600">
                  A mobile-first, offline-capable app for the frontline. Shift dashboards, task lists, and eMAR execution on the go.
                </p>
              </div>

              {/* Panel C */}
              <div className="flex flex-col bg-white rounded-2xl p-8 shadow-sm border border-gray-100 transition hover:shadow-md">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft">
                  <span className="text-brand font-bold text-lg">C</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Family Portal</h3>
                <p className="mt-4 flex-auto text-base leading-7 text-gray-600">
                  A consent-gated customer app for families to see timeline updates, pay invoices, and communicate with the care team securely.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <FeatureGrid />
      <MobileFeature />
      <FamilyPortalFeature />
      <Testimonials />
      <CtaSection />
    </>
  );
}
