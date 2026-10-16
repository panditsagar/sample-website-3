'use client';

import { Children, createContext, isValidElement, useContext, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const AccordionContext = createContext(null);

export function Accordion({ children, ...props }) {
  const initiallyOpen = Children.toArray(children).find(child => isValidElement(child) && child.props.defaultOpen)?.props.id;
  const [activeId, setActiveId] = useState(initiallyOpen || null);
  return <AccordionContext.Provider value={{ activeId, setActiveId }}><div {...props}>{children}</div></AccordionContext.Provider>;
}

export function AccordionItem({ id, headingId, title, className, children }) {
  const { activeId, setActiveId } = useContext(AccordionContext);
  const open = activeId === id;
  return (
    <div className={className}>
      <h2 className="accordion-header" id={headingId}>
        <button className={`accordion-button${open ? '' : ' collapsed'}`} type="button" data-bs-target={`#${id}`} aria-expanded={open} aria-controls={id} onClick={() => setActiveId(open ? null : id)}>{title}</button>
      </h2>
      <div id={id} className={`accordion-collapse collapse${open ? ' show' : ''}`} role="region" aria-labelledby={headingId}>{children}</div>
    </div>
  );
}

export function Carousel({ children, variant }) {
  const logos = variant === 'logos';
  const slides = Children.toArray(children).filter(isValidElement);
  return (
    <Swiper modules={[Autoplay]} slidesPerView={logos ? 2 : 1} speed={logos ? 2000 : 1500} spaceBetween={logos ? 20 : 30} loop={slides.length > 2} autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }} breakpoints={logos ? { 767: { slidesPerView: 4 } } : { 1025: { slidesPerView: 2 } }} grabCursor aria-label={logos ? 'Trusted partners' : 'Client testimonials'}>
      {slides.map((slide, index) => <SwiperSlide key={slide.key || index} className={slide.props.className?.replace('swiper-slide', '').trim()}>{slide.props.children}</SwiperSlide>)}
    </Swiper>
  );
}

export function Counter({ value, ...props }) {
  const element = useRef(null);
  const [display, setDisplay] = useState(value);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const target = Number(value.replaceAll(',', ''));
    if (!Number.isFinite(target)) return;
    const decimals = value.includes('.') ? value.split('.')[1].length : 0;
    let frame;
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      observer.disconnect();
      const start = performance.now();
      const tick = now => {
        const progress = Math.min((now - start) / 1800, 1);
        setDisplay((target * (1 - Math.pow(1 - progress, 3))).toFixed(decimals));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    observer.observe(element.current);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [value]);
  return <span {...props} ref={element}>{display}</span>;
}

export function DemoForm({ children, id, action, method, ...props }) {
  const [feedback, setFeedback] = useState('');
  function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    try {
      const key = `lifeon-demo-${id}`;
      const submissions = JSON.parse(localStorage.getItem(key) || '[]');
      submissions.push({ savedAt: new Date().toISOString(), fields: Object.fromEntries(new FormData(form)) });
      localStorage.setItem(key, JSON.stringify(submissions));
      setFeedback('Demo: your details have been saved in this browser. No email has been sent.');
      form.reset();
    } catch {
      setFeedback('Your browser could not save these details. Please enable browser storage and try again.');
    }
  }
  return <form {...props} id={id} onSubmit={submit}>{children}{feedback && <p className="local-form-status" role="status" aria-live="polite">{feedback}</p>}</form>;
}

function MediaDialog({ items, index, setIndex, onClose, video }) {
  const dialog = useRef(null);
  useEffect(() => {
    const previousFocus = document.activeElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.current?.querySelector('button')?.focus();
    function keydown(event) {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight' && !video) setIndex((index + 1) % items.length);
      if (event.key === 'ArrowLeft' && !video) setIndex((index - 1 + items.length) % items.length);
      if (event.key === 'Tab') {
        const controls = [...dialog.current.querySelectorAll('button, iframe')];
        const first = controls[0];
        const last = controls.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    }
    document.addEventListener('keydown', keydown);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', keydown);
      previousFocus?.focus();
    };
  }, [index, items, onClose, setIndex, video]);
  return createPortal(
    <div className="mfp-wrap lifeon-media-dialog" role="dialog" aria-modal="true" aria-label={video ? 'Video player' : 'Image gallery'} ref={dialog} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
      <button className="mfp-close" type="button" aria-label="Close dialog" onClick={onClose}>×</button>
      {video ? <iframe src={video} title="Coaching video" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen /> : <>
        <button className="lifeon-gallery-previous" type="button" aria-label="Previous image" onClick={() => setIndex((index - 1 + items.length) % items.length)}>‹</button>
        <figure><img className="mfp-img" src={items[index].src} alt={items[index].alt} /><figcaption>{index + 1} / {items.length}</figcaption></figure>
        <button className="lifeon-gallery-next" type="button" aria-label="Next image" onClick={() => setIndex((index + 1) % items.length)}>›</button>
      </>}
    </div>, document.body,
  );
}

export function Gallery({ children, ...props }) {
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(null);
  function open(event) {
    const link = event.target.closest('a');
    if (!link || !event.currentTarget.contains(link)) return;
    event.preventDefault();
    const links = [...event.currentTarget.querySelectorAll('a')];
    setItems(links.map(anchor => ({ src: anchor.href, alt: anchor.querySelector('img')?.alt || 'Lifeon coaching gallery' })));
    setIndex(links.indexOf(link));
  }
  return <div {...props} onClick={open}>{children}{index !== null && <MediaDialog items={items} index={index} setIndex={setIndex} onClose={() => setIndex(null)} />}</div>;
}

export function VideoLink({ href, children, ...props }) {
  const [open, setOpen] = useState(false);
  const match = href.match(/(?:v=|youtu\.be\/)([\w-]+)/);
  const embed = match ? `https://www.youtube.com/embed/${match[1]}?autoplay=1` : href;
  return <><a {...props} href={href} onClick={event => { event.preventDefault(); setOpen(true); }}>{children}</a>{open && <MediaDialog video={embed} onClose={() => setOpen(false)} />}</>;
}
