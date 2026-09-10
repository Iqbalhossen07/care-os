import Link from 'next/link';
import React from 'react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center group">
      <div className="bg-white rounded-xl px-4 py-2 shadow-sm transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
        <img 
          src="/logo.jpeg" 
          alt="CareStaff OS Logo" 
          className="h-12 md:h-14 w-auto object-contain mix-blend-multiply"
        />
      </div>
    </Link>
  );
}
