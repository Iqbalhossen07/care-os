import Link from 'next/link';
import React from 'react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="h-8 w-8 rounded bg-brand flex items-center justify-center shadow-[0_0_15px_rgba(0,210,170,0.4)] group-hover:shadow-[0_0_25px_rgba(0,210,170,0.6)] transition-all duration-300">
        <span className="text-background font-extrabold text-xl font-sans leading-none mt-0.5">C</span>
      </div>
      <span className="text-2xl font-extrabold font-sans text-foreground tracking-tight">
        CareStaff<span className="text-brand">OS</span>
      </span>
    </Link>
  );
}
