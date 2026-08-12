import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getNewsById, news } from '../data/news';
import NewsCard from '../components/NewsCard';
import useLanguage from '../hooks/useLanguage';
import { formatDate } from '../utils/formatDate';

export default function NewsDetails() {
  const { id } = useParams();
  const { t, lang, localize } = useLanguage();
  const item = getNewsById(id);

  if (!item) {
    return (
      <div className="not-found-card">
        <h1>{t('news.notFound')}</h1>
        <Link className="btn-primary" to="/news">
          {t('news.backToNews')}
        </Link>
      </div>
    );
  }

  const related = news.filter((entry) => entry.id !== item.id).slice(0, 2);

  return (
    <div className="page-shell">
      <section className="detail-hero">
        <Link className="back-link" to="/news">
          <ArrowLeft size={16} /> {t('news.backToNews')}
        </Link>
        <div className="content-card__meta">
          <span className="badge-tag">{localize(item.category)}</span>
          <time dateTime={item.date}>{formatDate(item.date, lang)}</time>
        </div>
        <h1>{localize(item.title)}</h1>
        <p>{localize(item.excerpt)}</p>
      </section>
      <section className="container content-section">
        {item.image && (
          <div className="article-cover">
            <img src={item.image} alt={localize(item.title)} />
          </div>
        )}
        <article className="ui-card article-body">
          <p>{localize(item.content)}</p>
        </article>
        {related.length > 0 && (
          <div className="related-block">
            <h2>{t('news.related')}</h2>
            <div className="card-grid two">
              {related.map((entry) => (
                <NewsCard key={entry.id} item={entry} />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
