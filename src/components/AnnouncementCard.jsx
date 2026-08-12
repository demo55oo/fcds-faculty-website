import React from 'react';
import useLanguage from '../hooks/useLanguage';
import { formatDate } from '../utils/formatDate';

export default function AnnouncementCard({ item }) {
  const { t, lang, localize } = useLanguage();

  return (
    <article className={`announcement-card ${item.priority === 'high' ? 'is-priority' : ''}`}>
      <div className="announcement-card__icon" aria-hidden="true">
        !
      </div>
      <div className="announcement-card__body">
        <div className="content-card__meta">
          <span className="badge-tag">{item.priority === 'high' ? t('announcements.priority') : t('announcements.normal')}</span>
          <time dateTime={item.date}>{formatDate(item.date, lang)}</time>
        </div>
        <h3>{localize(item.title)}</h3>
        <p>{localize(item.text)}</p>
        <span className="badge-tag badge-tag--soft">{localize(item.category)}</span>
      </div>
    </article>
  );
}
