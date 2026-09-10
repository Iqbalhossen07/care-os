import Link from 'next/link';
import React from 'react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center group">
      <img 
        src="/logo-white.png" 
        alt="CareStaff OS Logo" 
        className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
  );
}
