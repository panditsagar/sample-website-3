'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  ['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'],
  ['/blog', 'Blog'], ['/contact', 'Contact Us'],
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState(null);
  const open = openPath === pathname;
  useEffect(() => {
    function dismiss(event) { if (event.key === 'Escape') setOpenPath(null); }
    window.addEventListener('keydown', dismiss);
    return () => window.removeEventListener('keydown', dismiss);
  }, []);
  const close = () => setOpenPath(null);
  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg" aria-label="Main navigation">
          <div className="container">
            <Link className="navbar-brand" href="/" onClick={close}><img src="/images/logo.svg" alt="Lifeon" /></Link>
            <div className="collapse navbar-collapse main-menu">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  {links.map(([href, label]) => <li className="nav-item" key={href}><Link className="nav-link" href={href} aria-current={pathname === href ? 'page' : undefined}>{label}</Link></li>)}
                </ul>
              </div>
              <div className="header-btn"><Link href="/book-appointment" className="btn-default">Book Appointment</Link></div>
            </div>
            <div className="navbar-toggle">
              <button type="button" className={`slicknav_btn ${open ? 'slicknav_open' : 'slicknav_collapsed'}`} aria-label="Toggle navigation" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpenPath(open ? null : pathname)}>
                <span className="slicknav_icon"><span className="slicknav_icon-bar" /><span className="slicknav_icon-bar" /><span className="slicknav_icon-bar" /></span>
              </button>
            </div>
          </div>
        </nav>
        <div className="responsive-menu">
          <div className="slicknav_menu" hidden={!open}>
            <ul className="slicknav_nav" id="mobile-navigation" aria-label="Mobile navigation">
              {[...links, ['/book-appointment', 'Book Appointment']].map(([href, label]) => <li key={href}><Link href={href} onClick={close} aria-current={pathname === href ? 'page' : undefined}>{label}</Link></li>)}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
