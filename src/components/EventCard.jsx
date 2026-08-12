import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import useLanguage from '../hooks/useLanguage';

export default function EventCard({ item }) {
  const { t, localize } = useLanguage();

  return (
    <article className="event-card">
      <div className="event-card__date">
        <strong>{item.day}</strong>
        <span>{localize(item.month)}</span>
      </div>
      <div className="event-card__body">
        <h3>{localize(item.title)}</h3>
        <p>{localize(item.excerpt)}</p>
        <p className="event-card__location">
          <MapPin size={15} aria-hidden="true" />
          {localize(item.location)}
        </p>
        <Link className="text-link" to={`/events/${item.id}`}>
          {t('common.details')}
        </Link>
      </div>
    </article>
  );
}
