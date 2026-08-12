import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BrainCircuit, Database, HeartPulse, ShieldCheck, TrendingUp, Video } from 'lucide-react';
import useLanguage from '../hooks/useLanguage';

const ICONS = {
  Database,
  TrendingUp,
  BrainCircuit,
  Video,
  HeartPulse,
  ShieldCheck,
};

export default function ProgramCard({ item }) {
  const { t, localize } = useLanguage();
  const Icon = ICONS[item.icon] || Database;

  return (
    <article className="ui-card program-card">
      <div className="program-card__top">
        <span className="program-card__icon" style={{ color: item.color }}>
          <Icon size={24} aria-hidden="true" />
        </span>
        <span className="badge-tag">
          {item.creditHours} {t('programs.creditHoursShort')}
        </span>
      </div>
      <h3>{localize(item.degree)}</h3>
      <p>{localize(item.summary)}</p>
      <p className="program-card__meta">{localize(item.duration)}</p>
      <Link className="text-link" to={`/programs/${item.id}`}>
        {t('programs.viewDetails')} <ArrowUpRight size={16} />
      </Link>
    </article>
  );
}
