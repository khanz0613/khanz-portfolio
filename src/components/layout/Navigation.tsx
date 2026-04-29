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

  const isHome = pathname === '/';
  const useDarkTop = isHome && !isScrolled;

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
          useDarkTop
            ? 'border-b border-white/10 bg-[#07110f]/[0.72] text-white backdrop-blur-md'
            : 'border-b border-zinc-950/10 bg-[#f8f5ee]/[0.92] text-zinc-950 shadow-sm backdrop-blur-md'
        )}
      >
        <nav className="container-width section-padding flex h-16 items-center justify-between">
          <Link href="/" className="group inline-flex items-center gap-2" aria-label="하경한 홈">
            <span
              className={cn(
                'flex h-8 w-8 items-center justify-center rounded-lg text-xs font-black transition-colors',
                useDarkTop ? 'bg-[#f6d365] text-zinc-950' : 'bg-zinc-950 text-white'
              )}
            >
              KH
            </span>
            <span className={cn('font-black transition-colors', useDarkTop ? 'text-white group-hover:text-[#f6d365]' : 'text-zinc-950 group-hover:text-sky-700')}>
              하경한
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'rounded-lg px-3 py-2 text-sm font-bold transition-colors',
                    useDarkTop
                      ? active
                        ? 'bg-white/[0.12] text-[#f6d365]'
                        : 'text-zinc-300 hover:bg-white/[0.08] hover:text-white'
                      : active
                        ? 'bg-zinc-950 text-white'
                        : 'text-zinc-600 hover:bg-zinc-950/[0.06] hover:text-zinc-950'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="https://github.com/khanz0613"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'rounded-lg p-2 transition-colors',
                useDarkTop ? 'text-zinc-300 hover:bg-white/[0.08] hover:text-white' : 'text-zinc-600 hover:bg-zinc-950/[0.06] hover:text-zinc-950'
              )}
              aria-label="GitHub"
            >
              <Github size={18} className="stroke-current" />
            </a>
            <a
              href="mailto:gkrudgks0613@gmail.com"
              className={cn(
                'rounded-lg p-2 transition-colors',
                useDarkTop ? 'text-zinc-300 hover:bg-white/[0.08] hover:text-white' : 'text-zinc-600 hover:bg-zinc-950/[0.06] hover:text-zinc-950'
              )}
              aria-label="Email"
            >
              <Mail size={18} className="stroke-current" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className={cn(
              'rounded-lg p-2 transition-colors md:hidden',
              useDarkTop ? 'text-zinc-200 hover:bg-white/10' : 'text-zinc-700 hover:bg-zinc-950/10'
            )}
            aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {isOpen && (
        <div className="border-b border-zinc-950/10 bg-[#f8f5ee] md:hidden">
          <div className="container-width section-padding py-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={cn(
                    'rounded-lg px-3 py-2 text-sm font-bold transition-colors',
                    isActive(item.href) ? 'bg-zinc-950 text-white' : 'text-zinc-700 hover:bg-zinc-950/[0.08]'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 border-t border-zinc-950/10 pt-4">
              <a
                href="https://github.com/khanz0613"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-950/10 px-3 py-2 text-sm font-bold text-zinc-700"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="mailto:gkrudgks0613@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-950/10 px-3 py-2 text-sm font-bold text-zinc-700"
              >
                <Mail size={16} />
                Email
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
