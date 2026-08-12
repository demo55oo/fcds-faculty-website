import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';
import useLanguage from '../hooks/useLanguage';
import { logos } from '../assets';

const LINKS = [
  { path: '/', key: 'home', end: true },
  { path: '/about', key: 'about' },
  { path: '/departments', key: 'departments' },
  { path: '/programs', key: 'programs' },
  { path: '/news', key: 'news' },
  { path: '/announcements', key: 'announcements' },
  { path: '/faculty', key: 'faculty' },
  { path: '/services', key: 'services' },
  { path: '/events', key: 'events' },
  { path: '/contact', key: 'contact' },
];

export default function Navbar() {
  const { t, toggleLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="topbar">
        <div className="container topbar__inner">
          <a href="mailto:fcds-dean@alexu.edu.eg">fcds-dean@alexu.edu.eg</a>
          <span>{t('common.university')}</span>
        </div>
      </div>

      <div className="site-header__branding container">
        <Link to="/" className="brand" onClick={close}>
          <img src={logos.fcds} alt={t('common.brandFull')} className="brand__logo" />
        </Link>

        <div className="header-actions">
          <button type="button" className="lang-btn" onClick={toggleLanguage}>
            <Globe size={16} aria-hidden="true" />
            {t('nav.langSwitch')}
          </button>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
            <span className="sr-only">{open ? t('nav.menuClose') : t('nav.menuOpen')}</span>
          </button>
        </div>
      </div>

      <div className="nav-strip">
        <div className="container">
          <nav className="desktop-nav" aria-label="Primary">
            {LINKS.map((link) => (
              <NavLink key={link.path} to={link.path} end={link.end} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                {t(`nav.${link.key}`)}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      <div className={`mobile-drawer ${open ? 'is-open' : ''}`} id="mobile-drawer">
        <nav aria-label="Mobile">
          {LINKS.map((link) => (
            <NavLink key={link.path} to={link.path} end={link.end} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={close}>
              {t(`nav.${link.key}`)}
            </NavLink>
          ))}
          <button type="button" className="lang-btn lang-btn--block" onClick={toggleLanguage}>
            <Globe size={16} aria-hidden="true" />
            {t('nav.langSwitch')}
          </button>
        </nav>
      </div>
      {open && <button type="button" className="drawer-backdrop" aria-label={t('nav.menuClose')} onClick={close} />}
    </header>
  );
}
