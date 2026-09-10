import React from 'react';
import { HiOutlineCheckCircle } from 'react-icons/hi2';
import { Button } from '@/components/common/Button';

export function MobileFeature() {
  return (
    <section className="overflow-hidden bg-background py-24 sm:py-32 relative">
      {/* Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[800px] bg-brand/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          
          {/* Left Text */}
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 border border-brand/20 px-3 py-1 text-sm font-medium text-brand mb-6 shadow-inner">
                Care Worker PWA
              </div>
              <h2 className="text-2xl md:text-4xl xl:text-4xl 2xl:text-4xl font-sans font-extrabold tracking-tight text-white leading-tight">
                Built for the frontline. <br/>Works entirely offline.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-400 font-serif">
                Give your carers a mobile-first app they will actually love using. No more lost data when Wi-Fi drops. The app automatically syncs when a connection is restored.
              </p>
              
              <div className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-400 font-serif">
                <div className="flex gap-4 group">
                  <div className="flex-none mt-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 border border-brand/20 group-hover:bg-brand/20 transition-colors shadow-inner">
                      <HiOutlineCheckCircle className="h-5 w-5 text-brand" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <strong className="font-semibold text-white font-sans text-lg">Flawless eMAR execution.</strong> Guided medication rounds with mandatory reasoning for missed doses.
                  </div>
                </div>
                
                <div className="flex gap-4 group">
                  <div className="flex-none mt-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 border border-brand/20 group-hover:bg-brand/20 transition-colors shadow-inner">
                      <HiOutlineCheckCircle className="h-5 w-5 text-brand" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <strong className="font-semibold text-white font-sans text-lg">Instant photo capture.</strong> Securely take photos logged directly to resident profiles, backed by consent checks.
                  </div>
                </div>
                
                <div className="flex gap-4 group">
                  <div className="flex-none mt-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 border border-brand/20 group-hover:bg-brand/20 transition-colors shadow-inner">
                      <HiOutlineCheckCircle className="h-5 w-5 text-brand" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <strong className="font-semibold text-white font-sans text-lg">Panic button.</strong> Instant alerts to the Admin panel with the resident and location context.
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <Button href="/features" variant="outline" className="border-border-dark text-white hover:bg-border-dark">
                  Explore Care App
                </Button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-md flex justify-center">
            
            {/* Phone Frame */}
            <div className="relative rounded-[3rem] bg-[#05080a] p-3 shadow-2xl border border-gray-800 ring-1 ring-white/10 z-10 transform lg:rotate-3 transition-transform duration-700 hover:rotate-0 hover:shadow-[0_0_80px_rgba(0,210,170,0.15)]">
              {/* Screen Content */}
              <div className="relative rounded-[2.5rem] overflow-hidden bg-background h-[700px] w-full border border-gray-800">
                <img 
                  src="/mobile-app-mockup.jpg" 
                  alt="CareStaff OS Mobile App" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Element: Offline Sync */}
            <div className="absolute -left-4 md:-left-16 top-1/3 rounded-2xl bg-card-dark/90 backdrop-blur-xl border border-border-dark p-4 shadow-2xl z-20 animate-[bounce_5s_infinite] hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-brand animate-pulse shadow-[0_0_10px_rgba(0,210,170,0.8)]"></div>
                <span className="text-sm font-bold text-white font-sans">Offline sync restored</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
