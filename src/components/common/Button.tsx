import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline' | 'white';
  href?: string;
}

export function Button({ variant = 'primary', href, className = '', children, ...props }: ButtonProps) {
  // Mobile size: h-10, px-5, text-sm. Desktop size: md:h-12 md:px-8 md:text-base
  // All buttons will inherit these identical dimensions.
  const baseStyles = 'inline-flex items-center justify-center whitespace-nowrap rounded-md font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand h-10 px-5 text-sm md:h-12 md:px-8 md:text-base';

  
  const variants = {
    primary: 'bg-brand hover:bg-brand-hover text-white shadow-sm border border-transparent',
    outline: 'border-border-dark bg-transparent text-white hover:bg-border-dark hover:border-brand/50',
    ghost: 'bg-transparent text-gray-300 hover:text-brand hover:bg-card-dark',
    white: 'bg-white hover:bg-gray-50 text-background shadow-sm border border-transparent',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
