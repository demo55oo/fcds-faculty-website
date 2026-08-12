import React from 'react';
import { Link } from 'react-router-dom';
import useLanguage from '../hooks/useLanguage';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="not-found-card">
      <div className="eyebrow">404</div>
      <h1>{t('notFound.title')}</h1>
      <p>{t('notFound.desc')}</p>
      <Link className="btn-primary" to="/">
        {t('notFound.backHome')}
      </Link>
    </div>
  );
}
