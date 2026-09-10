import React from 'react';
import { ShieldCheck, LineChart, Heart, Zap, BarChart3, MapPin, Lock, Hospital } from 'lucide-react';

export function CqcCompliance() {
  const kloes = [
    {
      title: 'Safe',
      desc: 'Real-time incident reporting and eMAR alerts ensure residents are protected from harm.',
      icon: <ShieldCheck className="w-6 h-6" />,
      color: 'text-blue-400',
      bg: 'bg-blue-400/10',
      border: 'border-blue-400/20'
    },
    {
      title: 'Effective',
      desc: 'Care plans are always up-to-date, ensuring evidence-based outcomes for every individual.',
      icon: <LineChart className="w-6 h-6" />,
      color: 'text-brand',
      bg: 'bg-brand/10',
      border: 'border-brand/20'
    },
    {
      title: 'Caring',
      desc: 'Family portals and detailed resident preferences ensure person-centered, compassionate care.',
      icon: <Heart className="w-6 h-6" />,
      color: 'text-rose-400',
      bg: 'bg-rose-400/10',
      border: 'border-rose-400/20'
    },
    {
      title: 'Responsive',
      desc: 'Instant notifications for changing needs, allowing staff to adapt care delivery immediately.',
      icon: <Zap className="w-6 h-6" />,
      color: 'text-amber-400',
      bg: 'bg-amber-400/10',
      border: 'border-amber-400/20'
    },
    {
      title: 'Well-led',
      desc: 'Comprehensive dashboards give managers instant oversight and perfectly organized audit trails.',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'text-purple-400',
      bg: 'bg-purple-400/10',
      border: 'border-purple-400/20'
    }
  ];

  return (
    <section className="bg-background py-24 sm:py-32 relative overflow-hidden border-t border-border-dark">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Security Banner */}
        <div className="mb-20 flex flex-wrap justify-center gap-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-card-dark border border-border-dark px-4 py-2 text-xs sm:text-sm font-medium text-gray-300">
            <MapPin className="w-4 h-4 text-brand" /> UK-Based Servers (London)
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-card-dark border border-border-dark px-4 py-2 text-xs sm:text-sm font-medium text-gray-300">
            <Lock className="w-4 h-4 text-brand" /> 100% GDPR Compliant
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-card-dark border border-border-dark px-4 py-2 text-xs sm:text-sm font-medium text-gray-300">
            <Hospital className="w-4 h-4 text-brand" /> NHS DSPT Aligned
          </div>
        </div>

        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-2xl md:text-4xl xl:text-4xl 2xl:text-4xl font-extrabold tracking-tight text-white font-sans">
            Built to make your next <span className="text-brand">CQC inspection</span> stress-free.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-400 font-serif">
            CareStaff OS is engineered around the Care Quality Commission's 5 Key Lines of Enquiry (KLOEs). Gathering evidence has never been this automated.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {kloes.map((kloe, idx) => (
            <div key={idx} className={`flex flex-col rounded-2xl bg-card-dark border ${kloe.border} p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}>
              <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${kloe.bg} ${kloe.color}`}>
                {kloe.icon}
              </div>
              <h3 className={`text-xl font-bold font-sans tracking-tight mb-3 ${kloe.color}`}>
                {kloe.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-400 font-serif">
                {kloe.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
