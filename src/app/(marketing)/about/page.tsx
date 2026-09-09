import React from 'react';

export const metadata = {
  title: 'About Us | CareStaff OS',
  description: 'Learn about the mission and vision behind CareStaff OS.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-brand-soft px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl font-serif">
            Our Mission
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We built CareStaff OS to solve the fragmentation in social care software. Our goal is to connect admins, frontline carers, and families into one seamless, transparent ecosystem.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <p className="text-xl font-bold tracking-tight text-foreground sm:text-2xl font-serif mb-8">
            The Problem with Modern Care Software
          </p>
          <p className="mb-6">
            For too long, care homes have been forced to piece together multiple software solutions to manage their operations. You might use one app for rostering, another for eMAR, and yet another for billing. This fragmentation leads to lost data, frustrated staff, and a disconnect between the care provided and the families who want to stay informed.
          </p>
          <p className="mb-8">
            Worse yet, many systems try to cram everything into a single interface, making it overwhelming for frontline staff who just need quick, reliable access to their shift tasks.
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-foreground mt-16 mb-6 font-serif">
            The 3-Panel Solution
          </h2>
          <p className="mb-6">
            CareStaff OS was engineered from the ground up as <strong>three distinct applications</strong> sharing a single, powerful database.
          </p>
          <ul className="list-disc pl-6 space-y-4 mb-8">
            <li>
              <strong>Panel A (Admin & Business):</strong> A comprehensive, web-based ERP for managers, HR, and clinical leads. It handles everything from CQC compliance to kitchen inventory, protected by granular role-based permissions.
            </li>
            <li>
              <strong>Panel B (Care Worker PWA):</strong> A mobile-first, offline-capable application built exclusively for the frontline. It strips away the administrative noise, focusing purely on what carers need: shift dashboards, task lists, and secure eMAR execution.
            </li>
            <li>
              <strong>Panel C (Family Portal):</strong> A consent-gated customer portal that brings transparency to social care. Families can see timeline updates, pay invoices, and communicate with the care team securely.
            </li>
          </ul>

          <p className="mt-10 font-medium text-brand text-xl text-center font-serif">
            Join us in building a more connected, transparent future for social care.
          </p>
        </div>
      </section>
    </div>
  );
}
