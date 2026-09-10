import React from 'react';

const coreTestimonials = [
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
  {
    body: "The roster builder is incredible. What used to take me four hours every Thursday now takes twenty minutes, and it warns me about agency spend.",
    author: {
      name: 'James Wright',
      handle: 'Operations Director',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
    },
  },
  {
    body: "It's the only platform we've used where the Kitchen and the Care Team are actually synced. Dietary changes are instantly pushed to the chefs.",
    author: {
      name: 'Linda Patel',
      handle: 'Head Chef',
      imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150',
    },
  }
];

// Duplicate the array to ensure the screen is filled and the loop is seamless
const scrollingItems = [...coreTestimonials, ...coreTestimonials];

export function Testimonials() {
  return (
    <section className="bg-background py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-border-dark border border-gray-800 px-3 py-1 text-sm font-medium text-brand mb-6 shadow-inner">
            Testimonials
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-sans">
            Don't just take our word for it.
          </h2>
        </div>

        {/* Infinite Marquee Container */}
        <div className="relative w-full overflow-hidden flex pb-10">
          
          {/* Gradient Masks for fading edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 lg:w-64 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 lg:w-64 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none"></div>

          {/* The Scrolling Track */}
          {/* Notice hover:[animation-play-state:paused] to stop scrolling when reading */}
          <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused] gap-6 px-3">
            {scrollingItems.map((testimonial, i) => (
              <div key={i} className="w-[350px] md:w-[450px] shrink-0">
                <figure className="rounded-[2rem] bg-card-dark p-8 text-sm leading-6 border border-border-dark shadow-xl hover:border-brand/40 hover:shadow-[0_0_30px_rgba(0,210,170,0.1)] transition-all h-full flex flex-col justify-between">
                  <blockquote className="text-gray-300 font-serif text-base italic leading-relaxed">
                    <p>{`"${testimonial.body}"`}</p>
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-x-4 border-t border-border-dark/50 pt-6">
                    <img
                      className="h-12 w-12 rounded-full bg-gray-800 object-cover ring-2 ring-border-dark"
                      src={testimonial.author.imageUrl}
                      alt={testimonial.author.name}
                    />
                    <div>
                      <div className="font-semibold text-white font-sans text-lg tracking-tight">{testimonial.author.name}</div>
                      <div className="text-brand text-sm mt-0.5">{testimonial.author.handle}</div>
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
