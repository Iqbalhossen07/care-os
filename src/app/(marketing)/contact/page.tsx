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
    <div className="bg-background min-h-screen py-16 sm:py-32 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="mx-auto max-w-2xl px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-sans mb-4">Let's talk.</h1>
          <p className="mt-2 text-lg leading-8 text-gray-400 font-serif">
            Interested in CareStaff OS? Fill out the form below to book a demo or ask a question.
          </p>
        </div>

        {status === 'success' ? (
          <div className="rounded-3xl bg-brand/10 p-12 text-center border border-brand/20 shadow-2xl backdrop-blur-sm">
            <div className="mx-auto h-16 w-16 bg-brand/20 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 font-sans">Message Sent Successfully!</h3>
            <p className="text-gray-400 font-serif">Thank you for reaching out. Our team will get back to you shortly.</p>
            <Button className="mt-8 rounded-full border border-border-dark bg-card-dark text-white hover:bg-border-dark" onClick={() => setStatus('idle')} variant="outline">Send another message</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-card-dark p-8 sm:p-12 rounded-[2.5rem] border border-border-dark shadow-2xl">
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
  );
}
