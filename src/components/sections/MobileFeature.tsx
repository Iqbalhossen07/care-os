import React from 'react';
import { Button } from '@/components/common/Button';

export function MobileFeature() {
  return (
    <section className="overflow-hidden bg-brand-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-brand">Care Worker PWA</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif">
                Built for the frontline. <br/> Works entirely offline.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Give your carers a mobile-first app they will actually love using. No more lost data when Wi-Fi drops. The app automatically syncs when a connection is restored.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-foreground">
                    <span className="absolute left-1 top-1 h-5 w-5 text-brand">✓</span>
                    Flawless eMAR execution.
                  </dt>
                  <dd className="inline"> Lock-tight medication administration with mandatory reasoning for refused doses.</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-foreground">
                    <span className="absolute left-1 top-1 h-5 w-5 text-brand">✓</span>
                    Instant photo capture.
                  </dt>
                  <dd className="inline"> Securely take photos tagged directly to resident profiles, backed by consent checks.</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-foreground">
                    <span className="absolute left-1 top-1 h-5 w-5 text-brand">✓</span>
                    Panic button.
                  </dt>
                  <dd className="inline"> Instant alerts to the Admin panel with the resident and location context.</dd>
                </div>
              </dl>
              <div className="mt-10">
                <Button href="/features" variant="primary">Explore the Care App</Button>
              </div>
            </div>
          </div>
          <div className="relative">
            {/* Mockup Container */}
            <div className="relative mx-auto w-[300px] h-[600px] rounded-[3rem] border-[8px] border-gray-900 bg-white shadow-2xl overflow-hidden flex items-center justify-center">
              <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-3xl w-40 mx-auto"></div>
              <div className="text-center p-6">
                <div className="h-12 w-12 bg-brand-soft rounded-full mx-auto mb-4 flex items-center justify-center text-brand font-bold">B</div>
                <h3 className="font-bold text-lg">My Shift Today</h3>
                <div className="mt-4 space-y-3">
                  <div className="h-16 bg-gray-50 rounded-xl border border-gray-100"></div>
                  <div className="h-16 bg-gray-50 rounded-xl border border-gray-100"></div>
                  <div className="h-16 bg-gray-50 rounded-xl border border-gray-100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
