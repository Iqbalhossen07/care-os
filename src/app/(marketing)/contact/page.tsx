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
    <div className="bg-background min-h-screen py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Side: Info */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl font-sans mb-6">
              Get in touch with our team.
            </h2>
            <p className="text-lg leading-relaxed text-gray-400 font-serif mb-12">
              Whether you're looking for a demo, need support with your current setup, or just want to learn more about how CareStaff OS works, we're here to help.
            </p>

            <div className="space-y-10">
              {/* Contact Method 1 */}
              <div className="flex gap-4">
                <div className="flex-none mt-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-card-dark border border-border-dark text-brand shadow-inner">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-sans">Email Support</h3>
                  <p className="mt-2 text-sm text-gray-400 font-serif">Drop us an email and we'll get back to you within 24 hours.</p>
                  <a href="mailto:hello@carestaffos.com" className="mt-2 inline-block text-brand font-bold text-sm hover:underline">hello@carestaffos.com</a>
                </div>
              </div>

              {/* Contact Method 2 */}
              <div className="flex gap-4">
                <div className="flex-none mt-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-card-dark border border-border-dark text-blue-400 shadow-inner">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-sans">Call Us</h3>
                  <p className="mt-2 text-sm text-gray-400 font-serif">Available Monday to Friday, 9am - 5pm GMT.</p>
                  <a href="tel:+448001234567" className="mt-2 inline-block text-blue-400 font-bold text-sm hover:underline">+44 800 123 4567</a>
                </div>
              </div>

              {/* Office Location */}
              <div className="flex gap-4">
                <div className="flex-none mt-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-card-dark border border-border-dark text-purple-400 shadow-inner">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-sans">London HQ</h3>
                  <p className="mt-2 text-sm text-gray-400 font-serif leading-relaxed">
                    CareStaff OS Limited<br/>
                    124 Tech Hub Street<br/>
                    London, EC1V 2NX<br/>
                    United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 to-blue-500/10 rounded-[3rem] blur-2xl pointer-events-none"></div>
            
            {status === 'success' ? (
              <div className="relative h-full flex flex-col items-center justify-center rounded-[3rem] bg-card-dark p-12 text-center border border-border-dark shadow-2xl backdrop-blur-xl">
                <div className="h-20 w-20 bg-brand/20 rounded-full flex items-center justify-center mb-6 ring-4 ring-brand/10">
                  <svg className="w-10 h-10 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 font-sans">Request Received!</h3>
                <p className="text-gray-400 font-serif text-lg">Thank you for reaching out. Our team will get back to you shortly.</p>
                <Button className="mt-10 rounded-full border border-border-dark bg-background text-white hover:bg-border-dark" onClick={() => setStatus('idle')} variant="outline">Send another message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative space-y-6 bg-card-dark/80 backdrop-blur-xl p-8 sm:p-12 rounded-[3rem] border border-border-dark shadow-2xl">
                {status === 'error' && (
                  <div className="rounded-xl bg-red-900/20 p-4 text-sm text-red-400 border border-red-900/50">
                    {errorMessage}
                  </div>
                )}
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-300">Full Name *</label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full rounded-xl border-0 bg-background/50 px-4 py-3 text-white shadow-inner ring-1 ring-inset ring-border-dark focus:ring-2 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6 transition-all"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-300">Email Address *</label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full rounded-xl border-0 bg-background/50 px-4 py-3 text-white shadow-inner ring-1 ring-inset ring-border-dark focus:ring-2 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="company_name" className="block text-sm font-semibold leading-6 text-gray-300">Care Home / Company Name</label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="company_name"
                      id="company_name"
                      value={formData.company_name}
                      onChange={handleChange}
                      className="block w-full rounded-xl border-0 bg-background/50 px-4 py-3 text-white shadow-inner ring-1 ring-inset ring-border-dark focus:ring-2 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-300">Message *</label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-xl border-0 bg-background/50 px-4 py-3 text-white shadow-inner ring-1 ring-inset ring-border-dark focus:ring-2 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6 transition-all resize-none"
                    />
                  </div>
                </div>

                <Button type="submit" variant="primary" className="w-full h-14 text-base rounded-full shadow-[0_0_20px_rgba(0,210,170,0.3)] hover:shadow-[0_0_30px_rgba(0,210,170,0.5)] transition-all" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}
