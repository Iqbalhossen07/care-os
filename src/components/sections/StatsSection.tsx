import React from 'react';

const stats = [
  { id: 1, name: 'Care Providers', value: '1,000+' },
  { id: 2, name: 'Care Tasks Logged Monthly', value: '5 Million' },
  { id: 3, name: 'Hours Saved per Week', value: '15 hrs' },
  { id: 4, name: 'CQC Outstanding Rating', value: '98%' },
];

export function StatsSection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif">
              Trusted by the most innovative care homes
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              CareStaff OS is the engine powering compliance and quality care across the UK.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4 border border-gray-100 bg-gray-100">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-white p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-brand sm:text-4xl mb-2">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
