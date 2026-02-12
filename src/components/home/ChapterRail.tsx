'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface Chapter {
  id: string;
  label: string;
}

interface ChapterRailProps {
  chapters: Chapter[];
}

export default function ChapterRail({ chapters }: ChapterRailProps) {
  const [active, setActive] = useState(chapters[0]?.id ?? '');

  useEffect(() => {
    const elements = chapters
      .map((chapter) => document.getElementById(chapter.id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      {
        threshold: [0.35, 0.55, 0.75],
        rootMargin: '-10% 0px -45% 0px',
      }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [chapters]);

  return (
    <nav
      aria-label="홈 챕터 이동"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
    >
      <div className="rounded-2xl border border-slate-200 bg-white/88 p-3 shadow-lg backdrop-blur">
        <p className="mb-2 px-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">Chapters</p>
        <ul className="space-y-1.5">
          {chapters.map((chapter) => (
            <li key={chapter.id}>
              <a
                href={`#${chapter.id}`}
                className={cn(
                  'group flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs font-semibold transition-colors',
                  active === chapter.id ? 'bg-blue-50 text-blue-700' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'
                )}
              >
                <span
                  className={cn(
                    'h-1.5 w-1.5 rounded-full transition-colors',
                    active === chapter.id ? 'bg-blue-600' : 'bg-slate-300 group-hover:bg-slate-400'
                  )}
                />
                <span>{chapter.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
