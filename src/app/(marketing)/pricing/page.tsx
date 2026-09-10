import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Pricing | CareStaff OS',
  description: 'Transparent pricing plans designed to suit your homecare business.',
};

export default function PricingPage() {
  return (
    <div className="bg-background min-h-screen relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-brand/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-[40%] left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 px-6 lg:px-8 max-w-7xl mx-auto z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 border border-brand/20 px-3 py-1 text-xs font-bold text-brand uppercase tracking-widest mb-6">
              Pricing
            </div>
            <h1 className="text-2xl md:text-4xl xl:text-4xl 2xl:text-4xl font-extrabold text-white font-sans tracking-tight leading-[1.1] mb-6">
              Plans designed to suit <span className="text-brand">your homecare</span> business
            </h1>
            <p className="text-lg text-gray-400 font-serif leading-relaxed mb-8 max-w-lg">
              Whether you are a startup agency or a multi-branch enterprise, CareStaff OS scales perfectly with your operational and clinical needs.
            </p>
            <div className="flex gap-4">
              <Link href="/register" className="inline-flex justify-center rounded-xl bg-brand px-6 py-3.5 text-sm font-bold text-background shadow-lg hover:bg-brand-hover hover:shadow-[0_0_20px_rgba(0,210,170,0.4)] transition-all duration-300">
                Start 14-day free trial
              </Link>
              <Link href="/contact" className="inline-flex justify-center rounded-xl bg-card-dark border border-border-dark px-6 py-3.5 text-sm font-bold text-white hover:bg-border-dark transition-all duration-300">
                Talk to Sales
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-card-dark/80 backdrop-blur-xl border border-border-dark rounded-3xl p-8 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand to-blue-500"></div>
               <h3 className="text-xl font-bold text-white font-sans mb-2">Estimate your cost</h3>
               <p className="text-sm text-gray-400 font-serif mb-8">Move the slider to see how much you could save compared to legacy systems.</p>
               
               <div className="mb-6">
                 <div className="flex justify-between text-sm font-bold text-white font-sans mb-4">
                   <span>Number of Care Workers</span>
                   <span className="text-brand">50+</span>
                 </div>
                 <div className="w-full bg-border-dark rounded-full h-2">
                   <div className="bg-brand h-2 rounded-full" style={{ width: '45%' }}></div>
                 </div>
               </div>

               <div className="bg-background rounded-2xl p-6 border border-border-dark mt-8 text-center">
                 <p className="text-gray-400 text-sm font-serif mb-1">Estimated Operational Savings</p>
                 <p className="text-4xl font-extrabold text-white font-sans">30<span className="text-lg text-gray-500 font-normal"> hrs/week</span></p>
                 <p className="text-xs text-brand mt-2 font-medium">Reinvested back into patient care.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE VALUE CARDS */}
      <section className="py-20 bg-card-dark/30 border-y border-border-dark relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl xl:text-4xl 2xl:text-4xl font-bold text-white font-sans">Every CareStaff OS customer gets...</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Bank-Grade Security", desc: "AES-256 encryption & daily backups. Fully CQC compliant." },
              { title: "Unlimited Storage", desc: "Store infinite care plans, photos, and shift logs safely." },
              { title: "24/7 Priority Support", desc: "UK-based support team ready to help you at any hour." },
              { title: "Free Onboarding", desc: "Dedicated success manager to help migrate your legacy data." }
            ].map((feature, i) => (
              <div key={i} className="bg-background border border-border-dark rounded-2xl p-6 shadow-lg hover:border-brand/40 transition-colors group">
                <div className="h-12 w-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white font-sans mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 font-serif leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRICING TIERS */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl xl:text-4xl 2xl:text-4xl font-extrabold text-white font-sans mb-4">Pick the tier that suits your growth</h2>
          <p className="text-gray-400 font-serif max-w-2xl mx-auto">Scale your operations effortlessly. Upgrade or downgrade at any time.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Starter */}
          <div className="bg-card-dark border border-border-dark rounded-3xl p-8 flex flex-col hover:border-brand/30 transition-colors">
            <h3 className="text-xl font-bold text-white font-sans mb-2">Starter</h3>
            <p className="text-sm text-gray-400 font-serif mb-8 h-10">Essential tools for independent care workers.</p>
            <Link href="/contact" className="w-full py-3 rounded-xl bg-background border border-border-dark text-white font-bold text-sm hover:bg-border-dark transition-colors mb-8 text-center">Book a demo</Link>
            <ul className="space-y-4 flex-1">
              {['Up to 5 Care Workers', 'Basic Rostering', 'Digital Care Plans', 'Email Support'].map((feat, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-300 font-serif">
                  <svg className="w-5 h-5 text-brand shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Core */}
          <div className="bg-card-dark border border-brand rounded-3xl p-8 flex flex-col relative shadow-[0_0_30px_rgba(0,210,170,0.1)] transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand text-background text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Most Popular
            </div>
            <h3 className="text-xl font-bold text-brand font-sans mb-2">Core</h3>
            <p className="text-sm text-gray-400 font-serif mb-8 h-10">Everything you need to run a growing care home.</p>
            <Link href="/contact" className="w-full py-3 rounded-xl bg-brand text-background font-bold text-sm hover:bg-brand-hover shadow-lg hover:shadow-[0_0_20px_rgba(0,210,170,0.4)] transition-all mb-8 text-center">Book a demo</Link>
            <ul className="space-y-4 flex-1">
              {['Up to 30 Care Workers', 'Advanced Rostering', 'Medication Management (eMAR)', 'Family Portal Access', 'Priority Chat Support'].map((feat, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-300 font-serif">
                  <svg className="w-5 h-5 text-brand shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Advanced */}
          <div className="bg-card-dark border border-border-dark rounded-3xl p-8 flex flex-col hover:border-brand/30 transition-colors">
            <h3 className="text-xl font-bold text-white font-sans mb-2">Advanced</h3>
            <p className="text-sm text-gray-400 font-serif mb-8 h-10">Deep operational analytics for established agencies.</p>
            <Link href="/contact" className="w-full py-3 rounded-xl bg-background border border-border-dark text-white font-bold text-sm hover:bg-border-dark transition-colors mb-8 text-center">Book a demo</Link>
            <ul className="space-y-4 flex-1">
              {['Up to 100 Care Workers', 'Finance & Billing integration', 'Custom Reporting', 'Open API Access', 'Dedicated Success Manager'].map((feat, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-300 font-serif">
                  <svg className="w-5 h-5 text-brand shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise */}
          <div className="bg-card-dark border border-border-dark rounded-3xl p-8 flex flex-col hover:border-brand/30 transition-colors">
            <h3 className="text-xl font-bold text-white font-sans mb-2">Enterprise</h3>
            <p className="text-sm text-gray-400 font-serif mb-8 h-10">Bespoke solutions for multi-branch organizations.</p>
            <Link href="/contact" className="w-full py-3 rounded-xl bg-background border border-border-dark text-white font-bold text-sm hover:bg-border-dark transition-colors mb-8 text-center">Book a demo</Link>
            <ul className="space-y-4 flex-1">
              {['Unlimited Care Workers', 'Multi-branch Management', 'White-label Mobile App', 'SAML SSO', 'Custom Development'].map((feat, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-300 font-serif">
                  <svg className="w-5 h-5 text-brand shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl xl:text-4xl 2xl:text-4xl font-extrabold text-white font-sans mb-4">Compare features across all plans</h2>
        </div>

        <div className="w-full overflow-x-auto pb-4">
          <div className="min-w-[800px]">
            <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="w-1/3 py-6 px-4"></th>
                <th className="w-1/6 py-6 px-4 text-center font-bold text-white text-lg font-sans border-b-2 border-border-dark">Starter</th>
                <th className="w-1/6 py-6 px-4 text-center font-bold text-brand text-lg font-sans border-b-2 border-brand relative">
                   <div className="absolute top-0 left-0 w-full h-full bg-brand/5 rounded-t-xl -z-10"></div>
                   Core
                </th>
                <th className="w-1/6 py-6 px-4 text-center font-bold text-white text-lg font-sans border-b-2 border-border-dark">Advanced</th>
                <th className="w-1/6 py-6 px-4 text-center font-bold text-white text-lg font-sans border-b-2 border-border-dark">Enterprise</th>
              </tr>
            </thead>
            <tbody className="text-sm font-serif divide-y divide-border-dark/50">
              
              {/* Category */}
              <tr>
                <td colSpan={5} className="py-6 px-4 text-brand font-bold uppercase tracking-widest text-xs bg-background sticky left-0">Care Planning</td>
              </tr>
              {[
                { name: 'Digital Care Plans', tiers: [true, true, true, true] },
                { name: 'Risk Assessments', tiers: [true, true, true, true] },
                { name: 'Body Maps', tiers: [false, true, true, true] },
                { name: 'Custom Forms', tiers: [false, false, true, true] },
              ].map((feat, i) => (
                <tr key={i} className="hover:bg-card-dark/30 transition-colors">
                  <td className="py-4 px-4 text-gray-300">{feat.name}</td>
                  {feat.tiers.map((hasFeat, j) => (
                    <td key={j} className={`py-4 px-4 text-center ${j===1 ? 'bg-brand/5' : ''}`}>
                      {hasFeat ? <svg className="w-5 h-5 text-brand mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> : <span className="text-gray-600">-</span>}
                    </td>
                  ))}
                </tr>
              ))}

              {/* Category */}
              <tr>
                <td colSpan={5} className="py-6 px-4 text-brand font-bold uppercase tracking-widest text-xs bg-background sticky left-0 pt-10">Rostering & Staff</td>
              </tr>
              {[
                { name: 'Shift Scheduling', tiers: [true, true, true, true] },
                { name: 'GPS Clock In/Out', tiers: [false, true, true, true] },
                { name: 'Leave Management', tiers: [false, true, true, true] },
                { name: 'Payroll Export', tiers: [false, false, true, true] },
              ].map((feat, i) => (
                <tr key={i} className="hover:bg-card-dark/30 transition-colors">
                  <td className="py-4 px-4 text-gray-300">{feat.name}</td>
                  {feat.tiers.map((hasFeat, j) => (
                    <td key={j} className={`py-4 px-4 text-center ${j===1 ? 'bg-brand/5' : ''}`}>
                      {hasFeat ? <svg className="w-5 h-5 text-brand mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> : <span className="text-gray-600">-</span>}
                    </td>
                  ))}
                </tr>
              ))}
              
              {/* Category */}
              <tr>
                <td colSpan={5} className="py-6 px-4 text-brand font-bold uppercase tracking-widest text-xs bg-background sticky left-0 pt-10">Integrations & Support</td>
              </tr>
              {[
                { name: 'Email Support', tiers: [true, true, true, true] },
                { name: 'Live Chat Support', tiers: [false, true, true, true] },
                { name: 'Open API Access', tiers: [false, false, true, true] },
                { name: 'SAML SSO', tiers: [false, false, false, true] },
              ].map((feat, i) => (
                <tr key={i} className="hover:bg-card-dark/30 transition-colors border-b border-border-dark/50">
                  <td className="py-4 px-4 text-gray-300">{feat.name}</td>
                  {feat.tiers.map((hasFeat, j) => (
                    <td key={j} className={`py-4 px-4 text-center ${j===1 ? 'bg-brand/5 rounded-b-xl' : ''}`}>
                      {hasFeat ? <svg className="w-5 h-5 text-brand mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> : <span className="text-gray-600">-</span>}
                    </td>
                  ))}
                </tr>
              ))}

            </tbody>
          </table>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-24 relative z-10 border-t border-border-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center bg-card-dark border border-brand/20 p-12 md:p-16 rounded-[3rem] shadow-[0_0_50px_rgba(0,210,170,0.1)]">
          <h2 className="text-2xl md:text-4xl xl:text-4xl 2xl:text-4xl font-extrabold text-white font-sans mb-6">
            Technology that helps homecare work smarter
          </h2>
          <p className="text-lg text-gray-400 font-serif mb-10 max-w-2xl mx-auto">
            Join hundreds of care homes in the UK modernizing their clinical and operational workflows with CareStaff OS.
          </p>
          <Link href="/contact" className="inline-flex justify-center rounded-xl bg-brand px-8 py-4 text-base font-bold text-background shadow-lg hover:bg-brand-hover hover:shadow-[0_0_30px_rgba(0,210,170,0.4)] transition-all duration-300">
            Book a demo today
          </Link>
        </div>
      </section>

    </div>
  );
}
