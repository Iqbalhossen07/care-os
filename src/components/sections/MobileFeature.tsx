import React from 'react';
import { Button } from '@/components/common/Button';

export function MobileFeature() {
  return (
    <section className="overflow-hidden bg-background py-24 sm:py-32 relative">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[800px] bg-brand/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <div className="inline-flex items-center gap-2 rounded-full bg-border-dark px-3 py-1 text-sm font-medium text-brand mb-6">
                Care Worker PWA
              </div>
              <h2 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
                Built for the frontline. <br/>Works entirely offline.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-400 font-serif">
                Give your carers a mobile-first app they will actually love using. No more lost data when Wi-Fi drops. The app automatically syncs when a connection is restored.
              </p>
              
              <div className="mt-10 space-y-8 text-base leading-7 text-gray-400 font-serif">
                <div className="flex gap-4">
                  <div className="flex-none mt-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand/20">
                      <svg className="h-4 w-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    </div>
                  </div>
                  <div>
                    <strong className="font-semibold text-white font-sans">Flawless eMAR execution.</strong> Guided medication rounds with mandatory reasoning for missed doses.
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-none mt-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand/20">
                      <svg className="h-4 w-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    </div>
                  </div>
                  <div>
                    <strong className="font-semibold text-white font-sans">Instant photo capture.</strong> Securely take photos logged directly to resident profiles, backed by consent checks.
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-none mt-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand/20">
                      <svg className="h-4 w-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    </div>
                  </div>
                  <div>
                    <strong className="font-semibold text-white font-sans">Panic button.</strong> Instant alerts to the Admin panel with the resident and location context.
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <Button href="/features" variant="outline" className="border-border-dark text-white hover:bg-border-dark hover:border-brand/50">
                  Explore Care App
                </Button>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            {/* Dark Mobile Mockup */}
            <div className="relative mx-auto w-[320px] h-[650px] rounded-[3rem] border-8 border-card-dark bg-background shadow-[0_0_50px_rgba(0,210,170,0.15)] ring-1 ring-border-dark overflow-hidden transform transition-transform hover:-translate-y-2 duration-500">
              {/* Notch */}
              <div className="absolute top-0 inset-x-0 h-6 bg-card-dark rounded-b-2xl w-32 mx-auto z-20"></div>
              
              {/* App UI Header */}
              <div className="bg-card-dark pt-12 pb-4 px-6 text-white relative z-10 border-b border-border-dark">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-brand font-medium">My Shift</p>
                    <p className="text-xl font-bold font-sans">Today</p>
                  </div>
                  <div className="h-10 w-10 bg-background border border-border-dark rounded-full flex items-center justify-center shadow-sm">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150" className="w-8 h-8 rounded-full" />
                  </div>
                </div>
              </div>

              {/* App Body */}
              <div className="flex-1 relative bg-background p-4 space-y-4">
                {/* Task Card 1 */}
                <div className="bg-card-dark rounded-2xl shadow-sm border border-border-dark p-4 flex items-center gap-4">
                  <div className="h-12 w-12 bg-brand/20 text-brand rounded-full flex items-center justify-center font-bold font-sans text-lg border border-brand/20">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-white font-sans text-sm">Morning meds</p>
                    <p className="text-xs text-gray-400">08:00 AM • Room 12</p>
                  </div>
                </div>

                {/* Task Card 2 */}
                <div className="bg-card-dark rounded-2xl shadow-sm border border-border-dark p-4 flex items-center gap-4">
                  <div className="h-12 w-12 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center font-bold font-sans text-lg border border-blue-500/20">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-white font-sans text-sm">Breakfast assistance</p>
                    <p className="text-xs text-gray-400">09:15 AM • Dining</p>
                  </div>
                </div>

                {/* Completed Task */}
                <div className="bg-background rounded-2xl border border-border-dark p-4 flex items-center gap-4 opacity-60">
                  <div className="h-12 w-12 bg-border-dark text-gray-400 rounded-full flex items-center justify-center border border-gray-700">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-400 font-sans text-sm line-through">Handover Read</p>
                    <p className="text-xs text-gray-500">Completed 07:45 AM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Glassmorphic Notification */}
            <div className="absolute top-1/3 -left-8 lg:-left-16 rounded-2xl bg-card-dark/80 backdrop-blur-xl border border-border-dark p-4 shadow-2xl z-20 flex items-center gap-4 animate-[bounce_4s_infinite]">
               <div className="w-2 h-2 rounded-full bg-brand animate-pulse"></div>
               <span className="text-sm font-medium text-white">Offline sync restored</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
