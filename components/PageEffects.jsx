'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function PageEffects({ children }) {
  const root = useRef(null);
  const cursor = useRef(null);
  const pathname = usePathname();
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = [...root.current.querySelectorAll('.wow, .reveal, .text-anime-style-3')];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.dataset.reveal = 'visible';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });
    if (!reduced) targets.forEach(target => { target.dataset.reveal = 'pending'; observer.observe(target); });
    return () => { observer.disconnect(); targets.forEach(target => { delete target.dataset.reveal; }); };
  }, [children, pathname]);
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const element = cursor.current;
    function move(event) {
      element.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      const text = event.target.closest('[data-cursor-text]')?.dataset.cursorText;
      element.className = `cb-cursor -visible${text ? ' -text' : ''}${event.target.closest('a, button, input, select, textarea') ? ' -pointer' : ''}${event.target.closest('[data-cursor="-opaque"]') ? ' -opaque' : ''}`;
      element.firstChild.textContent = text || '';
    }
    function hide() { element.classList.remove('-visible'); }
    document.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseleave', hide);
    return () => { document.removeEventListener('mousemove', move); document.removeEventListener('mouseleave', hide); };
  }, []);
  return <><div ref={root}>{children}</div><div className="cb-cursor" ref={cursor} aria-hidden="true"><div className="cb-cursor-text" /></div></>;
}
