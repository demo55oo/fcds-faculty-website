import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';
import { getEventById } from '../data/events';
import useLanguage from '../hooks/useLanguage';
import { formatDate } from '../utils/formatDate';

export default function EventDetails() {
  const { id } = useParams();
  const { t, lang, localize } = useLanguage();
  const event = getEventById(id);

  if (!event) {
    return (
      <div className="not-found-card">
        <h1>{t('events.notFound')}</h1>
        <Link className="btn-primary" to="/events">
          {t('events.backToEvents')}
        </Link>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <section className="detail-hero">
        <Link className="back-link" to="/events">
          <ArrowLeft size={16} /> {t('events.backToEvents')}
        </Link>
        <h1>{localize(event.title)}</h1>
        <p>{localize(event.excerpt)}</p>
      </section>
      <section className="container content-section detail-layout">
        <article className="ui-card article-body">
          <p>{localize(event.content)}</p>
        </article>
        <aside className="ui-card">
          <p>
            <strong>{t('events.date')}:</strong> {formatDate(event.date, lang)}
          </p>
          <p className="event-card__location">
            <MapPin size={16} aria-hidden="true" />
            <span>
              <strong>{t('events.location')}:</strong> {localize(event.location)}
            </span>
          </p>
        </aside>
      </section>
    </div>
  );
}
