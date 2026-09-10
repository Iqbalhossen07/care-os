import React from 'react';

export function RoadmapSection() {
  const roadmap = [
    {
      phase: "Phase 1: Foundation (Completed)",
      items: [
        "Core Admin Dashboard (HR, Rostering)",
        "Care Worker Mobile PWA",
        "Digital Care Logs & Incident Reporting",
        "Role-Based Access Control"
      ],
      status: "completed"
    },
    {
      phase: "Phase 2: Closed Beta (In Progress)",
      items: [
        "Family Portal Rollout",
        "eMAR (Electronic Medication Administration)",
        "CQC Audit Trail Automation",
        "Custom Forms Builder"
      ],
      status: "current"
    },
    {
      phase: "Phase 3: Integration (Upcoming)",
      items: [
        "NHS GP Connect Integration",
        "DSPT Certification",
        "Pharmacy Software Sync",
        "Advanced Analytics & Predictive AI"
      ],
      status: "upcoming"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-background border-t border-border-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 border border-brand/20 px-4 py-2 text-xs font-bold text-brand uppercase tracking-widest mb-6">
            Our Roadmap
          </div>
          <h2 className="text-2xl md:text-4xl xl:text-4xl 2xl:text-4xl font-sans font-bold tracking-tight text-white mb-6">
            Building the future of UK social care
          </h2>
          <p className="text-gray-400 font-serif leading-relaxed">
            We are actively developing CareStaff OS alongside real care managers. Here is what we have built and what is coming next.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            {roadmap.map((phase, idx) => (
              <div 
                key={idx} 
                className={`relative p-8 rounded-2xl border ${
                  phase.status === 'current' 
                    ? 'bg-brand/10 border-brand/50 shadow-[0_0_30px_rgba(0,210,170,0.1)]' 
                    : 'bg-card-dark border-border-dark opacity-80'
                }`}
              >
                {phase.status === 'current' && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-background text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Current Focus
                  </div>
                )}
                <h3 className={`text-lg font-bold font-sans mb-6 ${phase.status === 'current' ? 'text-brand' : 'text-white'}`}>
                  {phase.phase}
                </h3>
                <ul className="space-y-4">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400 font-serif">
                      <span className={`flex-none mt-1 ${
                        phase.status === 'completed' ? 'text-brand' : 
                        phase.status === 'current' ? 'text-brand' : 'text-gray-600'
                      }`}>
                        {phase.status === 'completed' ? '✓' : (phase.status === 'current' ? '→' : '○')}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
