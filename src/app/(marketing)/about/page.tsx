import React from 'react';
import { Button } from '@/components/common/Button';

export const metadata = {
  title: 'About Us | CareStaff OS',
  description: 'Learn about the mission and vision behind CareStaff OS.',
};

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-32">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-card-dark border border-border-dark px-3 py-1 text-xs font-bold text-brand uppercase tracking-widest mb-8 shadow-md">
                About CareStaff
              </div>
              <h1 className="font-sans text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                Social care deserves a clearer system.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-400 font-serif">
                CareStaff OS was created to replace scattered spreadsheets, confusing compliance logs, and repetitive follow-ups with one calm, transparent workspace.
              </p>
              <div className="mt-10">
                <Button href="/contact" variant="primary" className="h-12 px-8 rounded-full shadow-[0_0_20px_rgba(0,210,170,0.3)] hover:shadow-[0_0_30px_rgba(0,210,170,0.5)] transition-all">
                  Start for Free &rarr;
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl bg-card-dark p-2 ring-1 ring-border-dark shadow-2xl overflow-hidden relative group">
                <img 
                  src="/about-dashboard.jpg" 
                  alt="CareStaff OS Dashboard UI" 
                  className="rounded-2xl w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Approach Grid */}
      <section className="border-t border-border-dark py-24 sm:py-32 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-card-dark border border-border-dark px-3 py-1 text-xs font-bold text-brand uppercase tracking-widest mb-6">
              Our Approach
            </div>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Less admin. More care.
            </h2>
            <p className="mt-4 text-gray-400 font-serif max-w-2xl mx-auto">
              We focus on the practical details that keep a care home running smoothly every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Simple by design',
                desc: 'Important daily actions stay clear for managers and staff, without unnecessary complexity.',
                icon: '✓',
              },
              {
                title: 'Transparent by default',
                desc: 'Care logs, incidents, and shift records remain easy to understand and verify instantly.',
                icon: '👁️',
              },
              {
                title: 'Built for real care',
                desc: 'Every workflow starts with the everyday needs of people who provide actual frontline care.',
                icon: '❤️',
              },
              {
                title: 'Time back for everyone',
                desc: 'Reliable automation reduces repetitive calculations, eMAR logging, and manual follow-up.',
                icon: '⏱️',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-card-dark border border-border-dark hover:border-brand/40 transition-colors">
                <div className="h-10 w-10 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-6 text-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white font-sans mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400 font-serif leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Built It */}
      <section className="py-24 relative overflow-hidden bg-[#050a0c]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Glowing Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'eMAR Tracking', icon: '💊' },
                { label: 'Staff Management', icon: '👥' },
                { label: 'CQC Compliance', icon: '🛡️' },
                { label: 'Actionable Insights', icon: '📈' },
              ].map((card, i) => (
                <div key={i} className="bg-brand/20 border border-brand/30 p-6 rounded-2xl shadow-[0_0_30px_rgba(0,210,170,0.1)] hover:bg-brand/30 transition-colors flex flex-col justify-center gap-3 h-32">
                  <span className="text-xl">{card.icon}</span>
                  <span className="text-sm font-bold text-white font-sans">{card.label}</span>
                </div>
              ))}
            </div>

            {/* Text Side */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-card-dark border border-border-dark px-3 py-1 text-xs font-bold text-brand uppercase tracking-widest mb-6">
                Why we built it
              </div>
              <h2 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6 leading-tight">
                One source of truth for the whole care home
              </h2>
              <p className="text-gray-400 font-serif mb-8 leading-relaxed">
                When everyone can see the same care records, rostering updates, notices, and compliance checks, daily operations become faster and critical mistakes are easily avoided.
              </p>
              <ul className="space-y-4">
                {[
                  'Clear roles for managers and frontline staff',
                  'Reliable audit trails for CQC inspections',
                  'Optimized for both desktop and mobile screens'
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300 font-sans font-medium">
                    <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-t border-b border-border-dark bg-card-dark py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border-dark">
            {[
              { stat: '1,000+', label: 'Care Homes Supported', icon: '🏢' },
              { stat: '10K+', label: 'Staff Members', icon: '👥' },
              { stat: '99.9%', label: 'System Uptime', icon: '⚡' },
              { stat: '24/7', label: 'Helpful Support', icon: '🎧' },
            ].map((s, i) => (
              <div key={i} className="flex items-center justify-center gap-4 px-4">
                <div className="text-brand text-2xl">{s.icon}</div>
                <div>
                  <div className="text-xl font-bold text-white font-sans">{s.stat}</div>
                  <div className="text-xs text-gray-500 font-serif">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="bg-card-dark border border-border-dark rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-none text-center">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" 
                alt="Founder" 
                className="w-32 h-32 rounded-2xl object-cover border border-border-dark shadow-xl mx-auto mb-6"
              />
              <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 border border-brand/20 px-3 py-1 text-[10px] font-bold text-brand uppercase tracking-widest mb-3">
                Founder
              </div>
              <h3 className="text-lg font-bold text-white font-sans">Sarah Jenkins</h3>
              <p className="text-xs text-brand font-bold">CEO, CareStaff OS</p>
            </div>
            
            <div className="flex-1 relative">
              <svg className="absolute -top-6 -left-6 w-12 h-12 text-border-dark/50" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative z-10 text-xl md:text-2xl font-serif text-gray-300 leading-relaxed italic">
                CareStaff OS exists to make the everyday work of social care more organized, accountable, and peaceful for everyone involved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
