"use client";

import React, { useState } from 'react';
import { Button } from '@/components/common/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', company_name: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', company_name: '', message: '' });
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="bg-background min-h-screen pb-0 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 py-16 sm:py-24">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Left Side: Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-sans mb-6 leading-tight">
              Get in touch with our team.
            </h2>
            <p className="text-lg leading-relaxed text-gray-400 font-serif mb-10">
              Whether you're looking for a demo, need support with your current setup, or just want to learn more about how CareStaff OS works, we're here to help.
            </p>

            <div className="space-y-4">
              {/* Card 1 */}
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-card-dark border border-border-dark hover:border-brand/30 transition-colors shadow-lg">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-background border border-border-dark text-brand shadow-inner">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-sans">Email Support</h3>
                  <p className="mt-1 text-sm text-gray-400 font-serif leading-relaxed">Drop us an email and we'll get back to you within 24 hours.</p>
                  <a href="mailto:hello@carestaffos.com" className="mt-2 inline-block text-brand font-semibold text-sm hover:underline">hello@carestaffos.com</a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-card-dark border border-border-dark hover:border-blue-400/30 transition-colors shadow-lg">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-background border border-border-dark text-blue-400 shadow-inner">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-sans">Call Us</h3>
                  <p className="mt-1 text-sm text-gray-400 font-serif leading-relaxed">Available Monday to Friday, 9am - 5pm GMT.</p>
                  <a href="tel:+448001234567" className="mt-2 inline-block text-blue-400 font-semibold text-sm hover:underline">+44 800 123 4567</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form Container */}
          <div className="lg:col-span-7 relative lg:pl-10">
            {/* Soft backdrop glow behind form */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg bg-brand/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            {status === 'success' ? (
              <div className="relative h-full min-h-[500px] flex flex-col items-center justify-center rounded-[2.5rem] bg-card-dark p-12 text-center border border-border-dark shadow-2xl">
                <div className="h-20 w-20 bg-brand/10 border border-brand/20 rounded-full flex items-center justify-center mb-6 ring-4 ring-brand/5 shadow-[0_0_30px_rgba(0,210,170,0.2)]">
                  <svg className="w-10 h-10 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 font-sans tracking-tight">Request Received!</h3>
                <p className="text-gray-400 font-serif text-lg">Thank you for reaching out. Our team will get back to you shortly.</p>
                <Button className="mt-10 h-12 rounded-full border border-border-dark bg-background text-white hover:bg-border-dark shadow-md hover:shadow-lg transition-all" onClick={() => setStatus('idle')} variant="outline">
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative bg-[#0b1115] p-8 sm:p-10 rounded-[2.5rem] border border-border-dark shadow-2xl shadow-black/50">
                {status === 'error' && (
                  <div className="rounded-xl bg-red-900/20 p-4 text-sm text-red-400 border border-red-900/50 mb-6">
                    {errorMessage}
                  </div>
                )}
                
                <div className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-300 font-sans tracking-wide">Full Name *</label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full rounded-xl border-0 bg-background/80 px-4 py-3.5 text-white shadow-inner ring-1 ring-inset ring-border-dark focus:ring-2 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6 transition-all focus:bg-background placeholder:text-gray-600"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-300 font-sans tracking-wide">Email Address *</label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full rounded-xl border-0 bg-background/80 px-4 py-3.5 text-white shadow-inner ring-1 ring-inset ring-border-dark focus:ring-2 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6 transition-all focus:bg-background placeholder:text-gray-600"
                        placeholder="john@carehome.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <label htmlFor="company_name" className="block text-sm font-semibold leading-6 text-gray-300 font-sans tracking-wide">Care Home / Company Name</label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="company_name"
                      id="company_name"
                      value={formData.company_name}
                      onChange={handleChange}
                      className="block w-full rounded-xl border-0 bg-background/80 px-4 py-3.5 text-white shadow-inner ring-1 ring-inset ring-border-dark focus:ring-2 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6 transition-all focus:bg-background placeholder:text-gray-600"
                      placeholder="e.g. Sunrise Care Ltd"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-300 font-sans tracking-wide">Message *</label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-xl border-0 bg-background/80 px-4 py-3.5 text-white shadow-inner ring-1 ring-inset ring-border-dark focus:ring-2 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6 transition-all resize-none focus:bg-background placeholder:text-gray-600"
                      placeholder="How can we help you?"
                    />
                  </div>
                </div>

                <div className="mt-10">
                  <Button type="submit" variant="primary" className="w-full h-14 text-base font-bold rounded-xl shadow-[0_0_20px_rgba(0,210,170,0.2)] hover:shadow-[0_0_30px_rgba(0,210,170,0.4)] transition-all" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            )}
          </div>
          
        </div>
      </div>

      {/* Dark Mode Map & Office Location Section */}
      <div className="relative w-full border-t border-border-dark mt-8">
        
        <div className="absolute top-10 left-10 z-20 hidden md:block">
           <div className="bg-card-dark/90 backdrop-blur-xl border border-border-dark p-8 rounded-3xl shadow-2xl max-w-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 border border-brand/20 text-brand shadow-inner mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-white font-sans tracking-tight mb-2">London HQ</h3>
              <p className="text-sm text-gray-400 font-serif leading-relaxed mb-6">
                CareStaff OS Limited<br/>
                124 Tech Hub Street<br/>
                London, EC1V 2NX<br/>
                United Kingdom
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-hover transition-colors">
                Get Directions &rarr;
              </a>
           </div>
        </div>

        {/* Google Map Embedded with Dark Mode CSS Filter */}
        <div className="w-full h-[500px] md:h-[600px] relative bg-background">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47340002653!2d-0.24168120642536509!3d51.5285582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%) hue-rotate(180deg)' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          />
          {/* Overlay gradient to blend map edges into the page */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(8,13,15,1)]"></div>
        </div>
      </div>
    </div>
  );
}
