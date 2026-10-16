'use client';

import { useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { gsap, ScrollTrigger, onPageReady } from '@/lib/animation';
import { createSmoothScroll } from '@/lib/smooth-scroll';

export default function PageEffects({ children }) {
  const root = useRef(null);
  const cursor = useRef(null);
  const pathname = usePathname();
  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    media.add('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
      const scrolling = createSmoothScroll();
      return () => scrolling.destroy();
    });
    return () => media.revert();
  }, [pathname]);
  useLayoutEffect(() => {
    const scope = root.current;
    const media = gsap.matchMedia(scope);
    const cancelReady = onPageReady(() => {
      media.add('(prefers-reduced-motion: no-preference)', () => {
        scope.querySelectorAll('.wow').forEach(element => {
          gsap.from(element, {
            autoAlpha: 0, yPercent: 100, duration: 1,
            delay: parseFloat(element.dataset.wowDelay || '0'), ease: 'power1.out',
            scrollTrigger: { trigger: element, start: 'top bottom', once: true },
            clearProps: 'opacity,visibility,transform',
          });
        });
        scope.querySelectorAll('.reveal').forEach(container => {
          const image = container.querySelector('img');
          if (!image) return;
          gsap.timeline({ scrollTrigger: { trigger: container, start: 'top bottom', once: true } })
            .set(container, { autoAlpha: 1 })
            .from(container, { xPercent: -100, duration: 1, ease: 'power2.out' })
            .from(image, { xPercent: 100, duration: 1, ease: 'power2.out' }, '<')
            .set([container, image], { clearProps: 'transform,opacity,visibility' });
        });
        scope.querySelectorAll('.skillbar').forEach(element => {
          const bar = element.querySelector('.count-bar');
          if (bar) gsap.fromTo(bar, { width: '0%' }, {
            width: element.dataset.percent, duration: 2, ease: 'power1.inOut',
            scrollTrigger: { trigger: element, start: 'top 70%', once: true },
          });
        });
        let cancelled = false;
        const refresh = () => { if (!cancelled) ScrollTrigger.refresh(); };
        document.fonts.ready.then(refresh);
        window.addEventListener('load', refresh);
        return () => { cancelled = true; window.removeEventListener('load', refresh); };
      });
      media.add('(prefers-reduced-motion: reduce)', () => {
        scope.querySelectorAll('.skillbar').forEach(element => {
          const bar = element.querySelector('.count-bar');
          if (bar) gsap.set(bar, { width: element.dataset.percent });
        });
      });
      media.add('(min-width: 1025px) and (prefers-reduced-motion: no-preference)', () => {
        const backgrounds = [...scope.querySelectorAll('.parallaxie')];
        const originals = backgrounds.map(element => ({ attachment: element.style.backgroundAttachment, position: element.style.backgroundPosition }));
        let frame;
        const update = () => {
          backgrounds.forEach(element => {
            element.style.backgroundAttachment = 'fixed';
            element.style.backgroundPosition = `center ${element.getBoundingClientRect().top * 0.45}px`;
          });
        };
        const schedule = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
        update();
        window.addEventListener('scroll', schedule, { passive: true });
        window.addEventListener('resize', schedule);
        return () => {
          cancelAnimationFrame(frame);
          window.removeEventListener('scroll', schedule);
          window.removeEventListener('resize', schedule);
          backgrounds.forEach((element, index) => {
            element.style.backgroundAttachment = originals[index].attachment;
            element.style.backgroundPosition = originals[index].position;
          });
        };
      });
    });
    return () => { cancelReady(); media.revert(); };
  }, [children, pathname]);
  useLayoutEffect(() => {
    const element = cursor.current;
    const media = gsap.matchMedia();
    media.add('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
      gsap.set(element, { x: -window.innerWidth, y: -window.innerHeight });
      const xTo = gsap.quickTo(element, 'x', { duration: 0.7, ease: 'expo.out' });
      const yTo = gsap.quickTo(element, 'y', { duration: 0.7, ease: 'expo.out' });
      function move(event) {
        xTo(event.clientX);
        yTo(event.clientY);
        const text = event.target.closest('[data-cursor-text]')?.dataset.cursorText;
        element.className = `cb-cursor -visible${text ? ' -text' : ''}${event.buttons ? ' -active' : ''}${event.target.closest('a, button, input, select, textarea') ? ' -pointer' : ''}${event.target.closest('[data-cursor="-opaque"]') ? ' -opaque' : ''}`;
        element.firstChild.textContent = text || '';
      }
      function hide() { element.classList.remove('-visible'); }
      function press() { element.classList.add('-active'); }
      function release() { element.classList.remove('-active'); }
      document.addEventListener('mousemove', move, { passive: true });
      document.addEventListener('mouseleave', hide);
      document.addEventListener('mousedown', press);
      document.addEventListener('mouseup', release);
      return () => {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseleave', hide);
        document.removeEventListener('mousedown', press);
        document.removeEventListener('mouseup', release);
        hide();
      };
    });
    return () => media.revert();
  }, []);
  return <><div ref={root}>{children}</div><div className="cb-cursor" ref={cursor} aria-hidden="true"><div className="cb-cursor-text" /></div></>;
}
