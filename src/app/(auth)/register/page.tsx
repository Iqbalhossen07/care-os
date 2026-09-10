import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Create your CareStaff OS account',
};

export default function RegisterPage() {
  return (
    <>
      <h2 className="mt-8 text-3xl font-bold tracking-tight text-white font-sans">
        Start your 14-day free trial
      </h2>
      <p className="mt-2 text-sm leading-6 text-gray-400 font-serif">
        Already have an account?{' '}
        <Link href="/login" className="font-semibold text-brand hover:text-brand-hover transition-colors">
          Sign in instead
        </Link>
      </p>

      <div className="mt-10">
        <form action="#" method="POST" className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-300 font-sans">
                First name
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  required
                  className="block w-full rounded-xl border-0 bg-card-dark px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-border-dark focus:ring-2 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6 transition-all duration-300"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-300 font-sans">
                Last name
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  required
                  className="block w-full rounded-xl border-0 bg-card-dark px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-border-dark focus:ring-2 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6 transition-all duration-300"
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-300 font-sans">
              Work email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full rounded-xl border-0 bg-card-dark px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-border-dark focus:ring-2 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6 transition-all duration-300"
                placeholder="you@carehome.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-300 font-sans">
              Care Home Name
            </label>
            <div className="mt-2">
              <input
                id="company"
                name="company"
                type="text"
                required
                className="block w-full rounded-xl border-0 bg-card-dark px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-border-dark focus:ring-2 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6 transition-all duration-300"
                placeholder="Sunrise Care Ltd"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-300 font-sans">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                className="block w-full rounded-xl border-0 bg-card-dark px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-border-dark focus:ring-2 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6 transition-all duration-300"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/"
              className="flex w-full justify-center rounded-xl bg-brand px-3 py-3 text-sm font-bold text-background shadow-lg hover:bg-brand-hover hover:shadow-[0_0_20px_rgba(0,210,170,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand transition-all duration-300"
            >
              Create Account
            </Link>
          </div>
          
          <p className="text-xs text-gray-500 font-serif text-center mt-4">
            By creating an account, you agree to our <Link href="/terms" className="text-brand hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-brand hover:underline">Privacy Policy</Link>.
          </p>
        </form>
      </div>
    </>
  );
}
