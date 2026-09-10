import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { MobileFeature } from '@/components/sections/MobileFeature';
import { FamilyPortalFeature } from '@/components/sections/FamilyPortalFeature';
import { CtaSection } from '@/components/sections/CtaSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      
      {/* Three Panel Feature Overview */}
      <section className="bg-background py-24 sm:py-32 border-b border-border-dark relative overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl md:text-4xl xl:text-4xl 2xl:text-4xl font-extrabold tracking-tight text-white font-sans">
              Three Panels. <span className="text-brand">One Ecosystem.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-400 font-serif">
              Unlike other software, CareStaff OS provides dedicated, purpose-built interfaces for every stakeholder in your care business.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              
              {/* Panel A */}
              <div className="flex flex-col bg-card-dark rounded-[2rem] p-10 shadow-2xl border border-border-dark transition-all duration-300 hover:border-brand/50 hover:-translate-y-2 group">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 border border-brand/20 shadow-inner group-hover:bg-brand group-hover:text-background transition-colors">
                  <span className="text-brand font-black text-xl group-hover:text-background transition-colors">A</span>
                </div>
                <h3 className="text-2xl font-bold text-white font-sans tracking-tight">Admin & Business Panel</h3>
                <p className="mt-4 flex-auto text-base leading-relaxed text-gray-400 font-serif">
                  A powerful web app with role-based permissions. Manage eMAR, HR, kitchen, maintenance, and CQC compliance in one place.
                </p>
              </div>

              {/* Panel B */}
              <div className="flex flex-col bg-card-dark rounded-[2rem] p-10 shadow-2xl border border-border-dark transition-all duration-300 hover:border-brand/50 hover:-translate-y-2 group">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 border border-brand/20 shadow-inner group-hover:bg-brand group-hover:text-background transition-colors">
                  <span className="text-brand font-black text-xl group-hover:text-background transition-colors">B</span>
                </div>
                <h3 className="text-2xl font-bold text-white font-sans tracking-tight">Care Worker PWA</h3>
                <p className="mt-4 flex-auto text-base leading-relaxed text-gray-400 font-serif">
                  A mobile-first, offline-capable app for the frontline. Shift dashboards, task lists, and eMAR execution on the go.
                </p>
              </div>

              {/* Panel C */}
              <div className="flex flex-col bg-card-dark rounded-[2rem] p-10 shadow-2xl border border-border-dark transition-all duration-300 hover:border-brand/50 hover:-translate-y-2 group">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 border border-brand/20 shadow-inner group-hover:bg-brand group-hover:text-background transition-colors">
                  <span className="text-brand font-black text-xl group-hover:text-background transition-colors">C</span>
                </div>
                <h3 className="text-2xl font-bold text-white font-sans tracking-tight">Family Portal</h3>
                <p className="mt-4 flex-auto text-base leading-relaxed text-gray-400 font-serif">
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
      <CtaSection />
    </>
  );
}
