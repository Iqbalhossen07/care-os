import React from 'react';

const testimonials = [
  {
    body: "Since moving to CareStaff OS, our CQC compliance has been effortless. The real-time eMAR alerts literally saved a resident's life last month.",
    author: {
      name: 'Sarah Jenkins',
      handle: 'Manager, Sunrise Care',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    },
  },
  {
    body: "The mobile app is so intuitive. Even our least tech-savvy carers picked it up in 5 minutes. No more hunting for Wi-Fi to log shift notes.",
    author: {
      name: 'David Okafor',
      handle: 'Senior Carer',
      imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150',
    },
  },
  {
    body: "As a daughter, the Family Portal gives me absolute peace of mind. I can see what Mum had for lunch and read messages from her care team instantly.",
    author: {
      name: 'Emma Thompson',
      handle: 'Family Member',
      imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    },
  },
];

export function Testimonials() {
  return (
    <section className="bg-background py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-border-dark px-3 py-1 text-sm font-medium text-brand mb-6">
            Testimonials
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl font-sans">
            Don't just take our word for it.
          </h2>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full">
                <figure className="rounded-2xl bg-card-dark p-8 text-sm leading-6 border border-border-dark shadow-xl hover:border-brand/40 transition-colors h-full flex flex-col justify-between">
                  <blockquote className="text-gray-300 font-serif text-base italic">
                    <p>{`"${testimonial.body}"`}</p>
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-x-4 border-t border-border-dark/50 pt-6">
                    <img
                      className="h-12 w-12 rounded-full bg-gray-800 object-cover ring-2 ring-border-dark"
                      src={testimonial.author.imageUrl}
                      alt=""
                    />
                    <div>
                      <div className="font-semibold text-white font-sans">{testimonial.author.name}</div>
                      <div className="text-brand text-xs mt-1">{testimonial.author.handle}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
