import React from 'react';
import useLanguage from '../hooks/useLanguage';

export default function HighlightCard({ item }) {
  const { localize } = useLanguage();

  return (
    <article className="highlight-card reveal">
      <div className="highlight-card__media">
        <img src={item.image} alt={localize(item.title)} loading="lazy" />
      </div>
      <div className="highlight-card__body">
        <h3>{localize(item.title)}</h3>
        <p>{localize(item.text)}</p>
      </div>
    </article>
  );
}
