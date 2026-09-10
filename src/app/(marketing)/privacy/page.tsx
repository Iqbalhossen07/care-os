import React from 'react';

export const metadata = {
  title: 'Privacy Policy | CareStaff OS',
  description: 'Our commitment to protecting your clinical and operational data.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-background min-h-screen py-20 px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle glowing orb */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="mx-auto max-w-4xl relative z-10 text-gray-300 font-serif leading-relaxed space-y-10">
        
        <div className="border-b border-border-dark pb-10">
          <p className="text-brand font-bold uppercase tracking-widest text-sm mb-4">Effective Date: October 1, 2026</p>
          <h2 className="text-2xl md:text-4xl xl:text-4xl 2xl:text-4xl font-bold text-white font-sans tracking-tight">Our Commitment to Privacy</h2>
          <p className="mt-4 text-lg">
            At CareStaff OS, we take the security and privacy of your care home&apos;s data incredibly seriously. 
            Because we operate in the healthcare sector, we hold ourselves to the highest standards of data 
            protection, exceeding standard CQC and GDPR requirements.
          </p>
        </div>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-white font-sans border-l-4 border-brand pl-4">1. Information We Collect</h3>
          <p>
            When you use the CareStaff OS ecosystem (Admin Dashboard, Care Worker App, Family Portal), we collect specific types of data to ensure the platform operates effectively:
          </p>
          <ul className="list-disc list-inside space-y-3 ml-4 text-gray-400">
            <li><strong className="text-gray-200">Operational Data:</strong> Rota schedules, staff profiles, shift logs.</li>
            <li><strong className="text-gray-200">Clinical Data:</strong> Patient care plans, medication logs, daily incident reports.</li>
            <li><strong className="text-gray-200">Account Data:</strong> Billing information, administrator emails, user roles.</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-white font-sans border-l-4 border-brand pl-4">2. How We Secure Your Data</h3>
          <p>
            All data stored on CareStaff OS is encrypted at rest using AES-256 encryption. Data transmitted between your devices and our servers is secured using TLS 1.3. We utilize enterprise-grade cloud infrastructure with continuous threat monitoring.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-white font-sans border-l-4 border-brand pl-4">3. Data Sharing</h3>
          <p>
            We <strong className="text-brand font-semibold">never</strong> sell your clinical or operational data to third parties. Data is only shared internally across your configured CareStaff modules (e.g., from the Care Worker App to the Family Portal) based strictly on the permission protocols set by your care home administrators.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-white font-sans border-l-4 border-brand pl-4">4. Your Rights</h3>
          <p>
            Under GDPR, your care home and your patients retain the right to access, rectify, or erase personal data. CareStaff OS provides built-in compliance tools to allow administrators to instantly export or anonymize records when legally requested.
          </p>
        </section>

        <div className="pt-10 mt-10 border-t border-border-dark">
          <p className="text-sm text-gray-500">
            If you have any questions regarding our Privacy Policy or data security infrastructure, please contact our Data Protection Officer at <a href="mailto:privacy@carestaffos.com" className="text-brand hover:underline">privacy@carestaffos.com</a>.
          </p>
        </div>

      </div>
    </div>
  );
}
