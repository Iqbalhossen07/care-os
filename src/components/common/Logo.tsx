import Link from 'next/link';
import React from 'react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center group">
      <img 
        src="/logo.jpeg" 
        alt="CareStaff OS Logo" 
        className="h-10 w-auto object-contain rounded-md shadow-sm transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
  );
}
