'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculate = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) {
        setProgress(0);
        return;
      }

      const ratio = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      setProgress(ratio);
    };

    calculate();
    window.addEventListener('scroll', calculate, { passive: true });
    window.addEventListener('resize', calculate);

    return () => {
      window.removeEventListener('scroll', calculate);
      window.removeEventListener('resize', calculate);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-16 z-[60] hidden h-1 bg-transparent lg:block">
      <div
        className="h-full origin-left bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 transition-transform duration-200"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
