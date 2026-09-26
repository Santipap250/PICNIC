'use client';

import { useEffect } from 'react';

// Locks background scroll while a drawer/sheet/modal is open, using the
// fixed-position technique so it also holds still on iOS Safari, and
// restores the exact scroll position when it closes.
export function useBodyScrollLock(active) {
  useEffect(() => {
    if (!active) return undefined;
    const scrollY = window.scrollY;
    const { style } = document.body;
    const prev = {
      position: style.position,
      top: style.top,
      width: style.width,
      overflow: style.overflow,
    };

    style.position = 'fixed';
    style.top = `-${scrollY}px`;
    style.width = '100%';
    style.overflow = 'hidden';

    return () => {
      style.position = prev.position;
      style.top = prev.top;
      style.width = prev.width;
      style.overflow = prev.overflow;
      window.scrollTo(0, scrollY);
    };
  }, [active]);
}

// Closes an open drawer/sheet/modal on Escape (desktop keyboard support).
export function useEscapeToClose(active, onClose) {
  useEffect(() => {
    if (!active) return undefined;
    function onKeyDown(event) {
      if (event.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [active, onClose]);
}
