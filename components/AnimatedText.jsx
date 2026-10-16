'use client';

import { Children, cloneElement, isValidElement, useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { gsap, ScrollTrigger, onPageReady } from '@/lib/animation';

function readableText(children) {
  return Children.toArray(children).map(child => isValidElement(child) ? readableText(child.props.children) : String(child)).join('');
}

// React owns these spans, so navigation and Fast Refresh never have to undo DOM splitting.
function splitText(children, prefix = 'text') {
  return Children.map(children, (child, childIndex) => {
    const key = `${prefix}-${childIndex}`;
    if (typeof child === 'string' || typeof child === 'number') {
      return String(child).split(/(\s+)/).map((word, wordIndex) => /^\s*$/.test(word) ? word : (
        <span className="animation-word" aria-hidden="true" key={`${key}-${wordIndex}`}>
          {Array.from(word).map((character, index) => <span className="animation-char" key={index}>{character}</span>)}
        </span>
      ));
    }
    return isValidElement(child) ? cloneElement(child, { children: splitText(child.props.children, key) }) : child;
  });
}

export default function AnimatedText({ as: Tag = 'h2', className = '', children, ...props }) {
  const element = useRef(null);
  const pathname = usePathname();
  useLayoutEffect(() => {
    let disposed = false;
    const media = gsap.matchMedia(element.current);
    function initialize() {
      if (disposed) return;
      media.add('(prefers-reduced-motion: no-preference)', () => {
        const heading = element.current;
        const styleOne = className.includes('text-anime-style-1');
        const styleTwo = className.includes('text-anime-style-2');
        const scrub = className.includes('text-effect');
        const parts = heading.querySelectorAll(styleOne ? '.animation-word' : '.animation-char');
        if (!parts.length) return;
        gsap.set(heading, { perspective: 400 });
        gsap.fromTo(parts, { opacity: scrub ? 0.3 : 0, x: scrub ? -7 : styleOne || styleTwo ? 20 : 50 }, {
          opacity: 1, x: 0, duration: scrub ? 0.7 : 1,
          delay: styleOne ? 0.5 : styleTwo ? 0.1 : 0,
          stagger: scrub ? 0.2 : styleOne ? 0.05 : styleTwo ? 0.03 : 0.02,
          ease: styleOne || styleTwo || scrub ? 'power2.out' : 'back.out(1.7)',
          scrollTrigger: { trigger: heading, start: scrub ? 'top 92%' : styleOne || styleTwo ? 'top 85%' : 'top 90%', ...(scrub ? { end: 'top 60%', scrub: 1 } : { once: true }) },
          ...(!scrub && { clearProps: 'opacity,transform' }),
        });
      });
      ScrollTrigger.refresh();
    }
    const cancelReady = onPageReady(initialize);
    return () => { disposed = true; cancelReady(); media.revert(); };
  }, [children, className, pathname]);
  return <Tag {...props} className={className} ref={element} aria-label={props['aria-label'] || readableText(children).replace(/\s+/g, ' ').trim()}>{splitText(children)}</Tag>;
}
