import React from 'react';
import { Link } from 'react-router-dom';
import useLanguage from '../hooks/useLanguage';
import { formatDate } from '../utils/formatDate';

export default function NewsCard({ item }) {
  const { t, lang, localize } = useLanguage();

  return (
    <article className="content-card news-card">
      {item.image && (
        <div className="news-card__media">
          <img src={item.image} alt={localize(item.title)} loading="lazy" />
        </div>
      )}
      <div className="news-card__body">
        <div className="content-card__meta">
          <span className="badge-tag">{localize(item.category)}</span>
          <time dateTime={item.date}>{formatDate(item.date, lang)}</time>
        </div>
        <h3>{localize(item.title)}</h3>
        <p>{localize(item.excerpt)}</p>
        <Link className="text-link" to={`/news/${item.id}`}>
          {t('common.readMore')}
        </Link>
      </div>
    </article>
  );
}
