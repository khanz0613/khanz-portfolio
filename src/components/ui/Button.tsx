'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

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
    const baseStyles =
      'inline-flex items-center justify-center rounded-lg font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

    const variants = {
      default:
        'bg-slate-900 !text-white shadow-sm shadow-slate-900/30 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-slate-900/40',
      outline:
        'border border-slate-300 bg-white text-slate-800 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50',
      ghost: 'bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900',
      destructive: 'bg-red-600 text-white hover:bg-red-700',
    };

    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-4 text-sm',
      lg: 'h-12 px-6 text-base',
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      const isWebExternal = href.startsWith('http://') || href.startsWith('https://');
      const isProtocolLink = href.startsWith('mailto:') || href.startsWith('tel:');

      if (isWebExternal || isProtocolLink) {
        const computedTarget = target ?? (isWebExternal ? '_blank' : undefined);
        const computedRel = rel ?? (isWebExternal ? 'noopener noreferrer' : undefined);

        return (
          <a href={href} className={classes} target={computedTarget} rel={computedRel}>
            {children}
          </a>
        );
      }

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
