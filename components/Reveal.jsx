'use client';
import { useEffect } from 'react';
export default function Reveal() {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.06 });
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(element => { element.classList.add('will-reveal'); observer.observe(element); });
    return () => { observer.disconnect(); elements.forEach(element => element.classList.remove('will-reveal')); };
  }, []);
  return null;
}

