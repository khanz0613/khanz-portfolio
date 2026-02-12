'use client';

import { useEffect } from 'react';

export default function HomeSnapMode() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('home-snap-mode');

    return () => {
      root.classList.remove('home-snap-mode');
    };
  }, []);

  return null;
}
