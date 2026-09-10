'use client';
import React, { useState } from 'react';

export function FaqSection() {
  const faqs = [
    {
      question: "Is our care data stored securely in the UK?",
      answer: "Yes. All data is encrypted at rest and in transit, and hosted on secure AWS servers located strictly within the UK (London Region). We fully comply with GDPR and NHS Data Security and Protection Toolkit (DSPT) standards."
    },
    {
      question: "Will our care workers be able to learn the app easily?",
      answer: "Absolutely. CareStaff OS is built with a mobile-first philosophy. The Care Worker PWA (Progressive Web App) looks and feels like modern social media apps, meaning your staff will know how to use it instinctively with near-zero training."
    },
    {
      question: "How does CareStaff OS help with CQC inspections?",
      answer: "Our entire ecosystem is mapped to the CQC's 5 KLOEs. eMAR alerts, digital incident reports, resident consent logs, and staff training records are automatically compiled into clear, verifiable audit trails that you can hand straight to an inspector."
    },
    {
      question: "What does it mean to be a 'Founding Member'?",
      answer: "By joining the waitlist early, you secure a Founding Member spot. This grants you a lifetime locked-in discount, free white-glove data migration from your old software, and direct priority access to our development team for custom feature requests."
    },
    {
      question: "Do you integrate with existing NHS systems?",
      answer: "We are currently building integrations with NHS Digital and GP Connect to ensure seamless flow of medical records and prescriptions. These will be available in our upcoming releases."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-background py-24 sm:py-32 border-t border-border-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-border-dark">
          <h2 className="text-2xl md:text-4xl xl:text-4xl 2xl:text-4xl font-extrabold tracking-tight text-white font-sans mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-border-dark">
            {faqs.map((faq, index) => (
              <div key={index} className="pt-6">
                <dt>
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex w-full items-start justify-between text-left text-white focus:outline-none group"
                  >
                    <span className="text-lg font-bold font-sans group-hover:text-brand transition-colors">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center text-brand">
                      {openIndex === index ? (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5" />
                        </svg>
                      ) : (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                      )}
                    </span>
                  </button>
                </dt>
                {openIndex === index && (
                  <dd className="mt-4 pr-12">
                    <p className="text-base leading-relaxed text-gray-400 font-serif">
                      {faq.answer}
                    </p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
