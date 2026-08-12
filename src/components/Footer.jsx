import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import useLanguage from '../hooks/useLanguage';
import { logos } from '../assets';

const FOOTER_LINKS = [
  { to: '/about', key: 'about' },
  { to: '/programs', key: 'programs' },
  { to: '/news', key: 'news' },
  { to: '/services', key: 'services' },
  { to: '/events', key: 'events' },
  { to: '/contact', key: 'contact' },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <img src={logos.alexu} alt={t('common.university')} className="footer-logo" />
          <h3>{t('common.brandFull')}</h3>
          <p>{t('common.university')}</p>
          <p className="footer-muted">{t('footer.address')}</p>
        </div>
        <div>
          <h4>{t('footer.usefulLinks')}</h4>
          <ul className="footer-links">
            {FOOTER_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{t(`nav.${link.key}`)}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>{t('footer.contactUs')}</h4>
          <p className="footer-contact">
            <MapPin size={16} aria-hidden="true" />
            <span>{t('contact.address')}</span>
          </p>
          <p className="footer-contact">
            <Mail size={16} aria-hidden="true" />
            <a href="mailto:fcds-dean@alexu.edu.eg">{t('contact.emailValue')}</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} {t('common.brandFull')}. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
}
