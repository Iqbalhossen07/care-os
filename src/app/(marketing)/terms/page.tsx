import React from 'react';

export const metadata = {
  title: 'Terms of Service | CareStaff OS',
  description: 'Terms and conditions for using the CareStaff OS platform.',
};

export default function TermsPage() {
  return (
    <div className="bg-background min-h-screen py-20 px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle glowing orb */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="mx-auto max-w-4xl relative z-10 text-gray-300 font-serif leading-relaxed space-y-10">
        
        <div className="border-b border-border-dark pb-10">
          <p className="text-brand font-bold uppercase tracking-widest text-sm mb-4">Effective Date: October 1, 2026</p>
          <h2 className="text-3xl font-bold text-white font-sans tracking-tight">Terms of Service</h2>
          <p className="mt-4 text-lg">
            Please read these Terms of Service carefully before subscribing to or using CareStaff OS. By using our platform, you agree to be bound by these terms.
          </p>
        </div>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-white font-sans border-l-4 border-brand pl-4">1. License and Access</h3>
          <p>
            Subject to your compliance with these Terms and payment of applicable subscription fees, CareStaff OS grants you a limited, non-exclusive, non-transferable, non-sublicensable license to access and make use of the CareStaff OS platform (including the Admin Panel, Worker App, and Family Portal) for your internal business operations.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-white font-sans border-l-4 border-brand pl-4">2. Account Responsibilities</h3>
          <p>
            You are entirely responsible for maintaining the confidentiality of your administrator and staff login credentials. You agree to notify us immediately of any unauthorized use of your account. Care homes are responsible for ensuring that their staff members comply with all CQC and local healthcare regulations while utilizing our software.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-white font-sans border-l-4 border-brand pl-4">3. Service Availability</h3>
          <p>
            We strive for a 99.9% uptime SLA. However, we do not guarantee that the service will be entirely uninterrupted. Scheduled maintenance will always be communicated at least 48 hours in advance and will be performed during off-peak hours to minimize disruption to your care facility.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-white font-sans border-l-4 border-brand pl-4">4. Liability</h3>
          <p>
            CareStaff OS is a technology provider, not a healthcare provider. We do not provide medical advice, diagnosis, or treatment. The responsibility for patient care lies entirely with the care home and its licensed staff. To the maximum extent permitted by law, CareStaff OS shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our software.
          </p>
        </section>

        <div className="pt-10 mt-10 border-t border-border-dark">
          <p className="text-sm text-gray-500">
            If you have any questions regarding our Terms of Service, please contact our Legal team at <a href="mailto:legal@carestaffos.com" className="text-brand hover:underline">legal@carestaffos.com</a>.
          </p>
        </div>

      </div>
    </div>
  );
}
