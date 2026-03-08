'use client';

import { useEffect } from 'react';

export function BackgroundParallax() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (reduceMotion || !hasFinePointer) return;

    const root = document.documentElement;
    let raf = 0;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollOffset = 0;

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      root.style.setProperty('--bg-shift-x', `${currentX.toFixed(2)}px`);
      root.style.setProperty('--bg-shift-y', `${currentY.toFixed(2)}px`);
      root.style.setProperty('--bg-scroll-y', `${scrollOffset.toFixed(2)}px`);

      raf = window.requestAnimationFrame(animate);
    };

    const onPointerMove = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      targetX = x * -16;
      targetY = y * -10;
    };

    const onScroll = () => {
      const next = Math.min(window.scrollY * -0.06, 28);
      scrollOffset = Math.max(next, -28);
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    raf = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('scroll', onScroll);
      if (raf) window.cancelAnimationFrame(raf);
      root.style.removeProperty('--bg-shift-x');
      root.style.removeProperty('--bg-shift-y');
      root.style.removeProperty('--bg-scroll-y');
    };
  }, []);

  return null;
}

