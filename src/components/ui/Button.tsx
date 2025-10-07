'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', href, target, rel, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

    const variants = {
      default: 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500',
      outline: 'border border-gray-300 bg-transparent hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800',
      ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800',
      destructive: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500'
    };

    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-4 py-2',
      lg: 'h-11 px-8 text-lg'
    };

    const classes = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    if (href) {
      // Use regular anchor tag for external links to support target/rel
      const isExternal = href.startsWith('http://') || href.startsWith('https://');

      if (isExternal) {
        return (
          <a href={href} className={classes} target={target} rel={rel}>
            {children}
          </a>
        );
      }

      // Use Next.js Link for internal navigation
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };