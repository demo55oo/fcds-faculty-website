import React from 'react';

export default function SectionTitle({ title, subtitle, align = 'center', eyebrow }) {
  return (
    <div className={`section-title section-title--${align}`}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2>{title}</h2>
      <div className="section-title__rule" aria-hidden="true" />
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
