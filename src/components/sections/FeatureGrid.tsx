import React from 'react';

const features = [
  {
    name: 'Resident Management',
    description: 'Full profiles, digital care plans, and clinical assessment tools (NEWS2, MUST) all in one place.',
    icon: '👤',
  },
  {
    name: 'eMAR & Medication',
    description: 'Schedule builder, administration logs, missed dose alerts, and pharmacy stock tracking.',
    icon: '💊',
  },
  {
    name: 'Rota & Workforce',
    description: 'Drag-and-drop calendar, open shift broadcasts, and timesheet auto-generation.',
    icon: '📅',
  },
  {
    name: 'HR & Compliance',
    description: 'Track DBS, visas, and training certificates with automated 30-day expiry alerts.',
    icon: '🛡️',
  },
  {
    name: 'Kitchen & Nutrition',
    description: 'Dietary profiles, allergen cross-checking, and 4-week rotating menu planners.',
    icon: '🍳',
  },
  {
    name: 'Sales & CRM',
    description: 'Manage enquiries, tour bookings, and bed availability from a unified Kanban pipeline.',
    icon: '📈',
  },
];

export function FeatureGrid() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-brand">Admin & Business Panel</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif">
            Everything you need to run your care business
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A comprehensive suite of modules designed to handle operations, compliance, and clinical needs securely.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-foreground">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-soft text-2xl">
                    {feature.icon}
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
