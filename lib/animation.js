import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

// Start the first entrance with the loader's fade, rather than playing behind it.
export function onPageReady(callback) {
  let cancelled = false;
  const run = () => {
    if (document.fonts.status === 'loaded') { if (!cancelled) callback(); }
    else document.fonts.ready.then(() => { if (!cancelled) callback(); });
  };
  if (document.readyState === 'complete') run();
  else window.addEventListener('load', run, { once: true });
  return () => { cancelled = true; window.removeEventListener('load', run); };
}
