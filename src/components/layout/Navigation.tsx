'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Github, Mail, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: '홈' },
  { href: '/projects', label: '프로젝트' },
  { href: '/skills', label: '기술' },
  { href: '/about', label: '소개' },
  { href: '/contact', label: '연락처' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'transition-all duration-300',
          isScrolled ? 'border-b border-slate-200 bg-white/88 backdrop-blur-md' : 'bg-transparent'
        )}
      >
        <nav className="container-width section-padding flex h-16 items-center justify-between">
          <Link href="/" className="group inline-flex items-center gap-2">
            <span className="rounded-xl bg-blue-600 px-2 py-1 text-xs font-black tracking-wider text-white">KH</span>
            <span className="font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600">
              하경한
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={cn(
                  'text-sm font-semibold tracking-tight transition-colors',
                  isActive(item.href) ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="https://github.com/khanz0613"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
              aria-label="GitHub"
            >
              <Github size={17} className="stroke-current" />
            </a>
            <a
              href="mailto:gkrudgks0613@gmail.com"
              className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
              aria-label="Email"
            >
              <Mail size={17} className="stroke-current" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 md:hidden"
            aria-label="메뉴 열기"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {isOpen && (
        <div className="border-b border-slate-200 bg-white md:hidden">
          <div className="container-width section-padding py-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={cn(
                    'rounded-lg px-3 py-2 text-sm font-semibold transition-colors',
                    isActive(item.href) ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-100'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex gap-2 border-t border-slate-200 pt-4">
              <a
                href="https://github.com/khanz0613"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700"
              >
                GitHub
              </a>
              <a
                href="mailto:gkrudgks0613@gmail.com"
                className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
