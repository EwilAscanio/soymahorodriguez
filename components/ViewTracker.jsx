'use client';
import { useEffect } from 'react';

export default function ViewTracker({ slug }) {
  useEffect(() => {
    const key = `soymaho_viewed_${slug}`;
    try {
      if (typeof window === 'undefined') return;
      if (sessionStorage.getItem(key)) return;
      navigator.sendBeacon(
        '/api/views',
        new Blob([JSON.stringify({ slug })], { type: 'application/json' })
      );
      sessionStorage.setItem(key, '1');
    } catch {}
  }, [slug]);
  return null;
}