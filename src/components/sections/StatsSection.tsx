import React from 'react';

export function StatsSection() {
  return (
    <section className="relative bg-background py-16 sm:py-24 border-y border-border-dark overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200px] bg-brand/5 blur-[100px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <p className="text-sm font-bold tracking-widest text-brand uppercase font-sans">
            Trusted by the most innovative care homes
          </p>
          <p className="mt-4 text-lg text-gray-400 font-serif">
            CareStaff OS is the engine powering compliance and quality care across the UK.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {[
            { stat: '1,000+', label: 'Care Providers' },
            { stat: '5 Million', label: 'Tasks Logged Monthly' },
            { stat: '15 hrs', label: 'Saved per Week' },
            { stat: '98%', label: 'CQC Outstanding Rating' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center px-4 text-center">
              <dt className="order-last mt-2 text-sm font-medium text-gray-500 font-serif">{item.label}</dt>
              <dd className="text-3xl font-extrabold tracking-tight text-white font-sans sm:text-4xl">
                {item.stat}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
