import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Founding Member Waitlist - CareStaff OS',
  description: 'Join the CareStaff OS waitlist today and become a founding member with exclusive lifetime benefits.',
};

export default function PricingPage() {
  return (
    <div className="bg-background pt-32 pb-24 relative overflow-hidden min-h-screen">
      {/* Glow Effects */}
      <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 border border-brand/20 px-4 py-2 text-xs font-bold text-brand uppercase tracking-widest mb-6">
            Limited Availability
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-white mb-6">
            Become a <span className="text-brand">Founding Member</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-serif leading-relaxed">
            CareStaff OS is currently in closed beta. We are opening our doors to 100 forward-thinking care homes in the UK. Join the waitlist today to secure exclusive early-adopter benefits.
          </p>
        </div>

        <div className="mx-auto max-w-4xl bg-card-dark border border-border-dark rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative Corner */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand/20 blur-3xl rounded-full pointer-events-none"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl font-bold text-white font-sans mb-2">Early Adopter Pass</h2>
              <p className="text-brand font-bold mb-8">100 Spots Total • Filling Fast</p>
              
              <ul className="space-y-6">
                {[
                  { title: "Lifetime Special Discount", desc: "Lock in a heavily discounted monthly rate that will never increase." },
                  { title: "White-Glove Migration", desc: "Our team will manually migrate your data from your old system for free." },
                  { title: "Custom Feature Requests", desc: "Direct access to our product team to request features you actually need." },
                  { title: "Dedicated UK Account Manager", desc: "Priority 24/7 support from our London-based team." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex-none h-6 w-6 rounded-full bg-brand/20 flex items-center justify-center text-brand mt-1">
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-bold font-sans text-lg">{item.title}</h3>
                      <p className="text-gray-400 font-serif text-sm mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-[#050a0c] border border-border-dark rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white font-sans mb-4">Secure your spot today</h3>
              <p className="text-gray-400 font-serif text-sm mb-8">No credit card required. We will notify you when a spot opens up.</p>
              
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Care Home Name" 
                  className="w-full bg-card-dark border border-border-dark rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-brand transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Work Email Address" 
                  className="w-full bg-card-dark border border-border-dark rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-brand transition-colors"
                />
                <button 
                  type="button" 
                  className="w-full bg-brand hover:bg-brand-dark text-background font-bold font-sans py-4 rounded-xl transition-colors mt-2"
                >
                  Join the Waitlist
                </button>
              </form>
              <p className="text-gray-500 font-serif text-xs mt-6">
                By joining, you agree to our <Link href="/terms" className="text-brand hover:underline">Terms</Link> and <Link href="/privacy" className="text-brand hover:underline">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
