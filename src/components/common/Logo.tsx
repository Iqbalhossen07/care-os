import Link from 'next/link';
import React from 'react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center group">
      <div className="bg-white rounded-lg px-3 py-1.5 shadow-sm transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
        <img 
          src="/logo-cropped.png" 
          alt="CareStaff OS Logo" 
          className="h-8 md:h-10 w-auto object-contain mix-blend-multiply"
        />
      </div>
    </Link>
  );
}
