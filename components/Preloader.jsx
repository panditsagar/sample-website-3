'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [phase, setPhase] = useState('loading');
  useEffect(() => {
    let disposed = false;
    let timeout;
    const finish = () => {
      document.fonts.ready.then(() => {
        if (disposed) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setPhase('done'); return; }
        setPhase('leaving');
        timeout = setTimeout(() => setPhase('done'), 600);
      });
    };
    if (document.readyState === 'complete') finish();
    else window.addEventListener('load', finish, { once: true });
    return () => { disposed = true; clearTimeout(timeout); window.removeEventListener('load', finish); };
  }, []);
  if (phase === 'done') return null;
  return <div className={`preloader${phase === 'leaving' ? ' is-leaving' : ''}`} aria-hidden="true"><div className="loading-container"><div className="loading" /><div id="loading-icon"><img src="/images/loader.svg" alt="" /></div></div></div>;
}
