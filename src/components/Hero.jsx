import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useLanguage from '../hooks/useLanguage';
import { heroSlides } from '../assets';

export default function Hero() {
  const { t, localize } = useLanguage();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[index];

  return (
    <section className="hero">
      {heroSlides.map((item, i) => (
        <img
          key={item.src}
          src={item.src}
          alt={localize(item.alt)}
          className={`hero__photo ${i === index ? 'is-active' : ''}`}
        />
      ))}
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__content container">
        <p className="hero__brand">{t('common.university')}</p>
        <h1>{t('hero.title')}</h1>
        <p className="hero__subtitle">{t('hero.subtitle')}</p>
        <p className="hero__caption">{localize(slide.alt)}</p>
        <div className="hero__actions">
          <Link to="/programs" className="btn-primary btn-accent">
            {t('hero.ctaPrimary')}
          </Link>
          <Link to="/contact" className="btn-secondary btn-on-dark">
            {t('hero.ctaSecondary')}
          </Link>
        </div>
        <div className="hero__dots" aria-hidden="true">
          {heroSlides.map((item, i) => (
            <button
              key={item.src}
              type="button"
              className={i === index ? 'is-active' : ''}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
