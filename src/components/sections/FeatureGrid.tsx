import React from 'react';

const features = [
  {
    name: 'Unified CRM & Operations',
    description: 'Keep all your care plans, resident profiles, and staff records in one single source of truth.',
    icon: '👤',
  },
  {
    name: 'Smart eMAR & Medication',
    description: 'Reduce errors with digital medication administration records that sync in real-time across the home.',
    icon: '💊',
  },
  {
    name: 'Rostering & Timesheets',
    description: 'Drag-and-drop shift builders, automatic wage calculations, and seamless payroll integrations.',
    icon: '📅',
  },
  {
    name: 'CQC Compliance Engine',
    description: 'Built-in audit trails and compliance tracking so you are always ready for an inspection.',
    icon: '🛡️',
  },
  {
    name: 'Kitchen & Inventory',
    description: 'Manage menus, track dietary requirements, and control stock levels efficiently.',
    icon: '🍳',
  },
  {
    name: 'Business Analytics',
    description: 'Beautiful dashboards providing insights into occupancy, revenue, and care quality metrics.',
    icon: '📈',
  },
];

export function FeatureGrid() {
  return (
    <section className="bg-background py-24 sm:py-32 relative border-y border-border-dark overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl lg:text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-border-dark px-3 py-1 text-sm font-medium text-brand mb-6">
            Admin & Business Panel
          </div>
          <h2 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Everything you need to run your care business
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-400 font-serif">
            A comprehensive suite of modules designed to handle operations, compliance, and clinical needs securely from one dashboard.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="relative p-8 rounded-2xl bg-card-dark border border-border-dark hover:border-brand/30 transition-colors group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background border border-border-dark group-hover:border-brand/50 transition-colors text-2xl shadow-inner shadow-brand/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold font-sans text-white">
                    {feature.name}
                  </h3>
                </div>
                <p className="text-base leading-7 text-gray-400 font-serif">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
