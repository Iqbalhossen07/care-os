import React from 'react';

const testimonials = [
  {
    body: "CareStaff OS completely transformed our workflow. Before, our admins and carers were using different systems. Now, everything is unified.",
    author: {
      name: 'Sarah Jenkins',
      handle: 'Manager, Meadow View Care',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: "The offline capability of the Care Worker PWA is a lifesaver. Our carers can complete eMARs even when the Wi-Fi drops, and it syncs perfectly later.",
    author: {
      name: 'David Okafor',
      handle: 'Clinical Lead, Sunnyside Homes',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: "Families love the Family Portal. We get 50% fewer phone calls asking for updates, because they can securely log in and see photos and timelines themselves.",
    author: {
      name: 'Emily Chen',
      handle: 'Director, Oakwood Care Group',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

export function Testimonials() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-brand">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif">
            Loved by care teams and families
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.name} className="flex flex-col justify-between bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <blockquote className="text-gray-700 leading-7">
                  "{testimonial.body}"
                </blockquote>
                <div className="mt-6 flex items-center gap-x-4">
                  <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.author.handle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
