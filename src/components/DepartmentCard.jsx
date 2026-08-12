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

export default function DepartmentCard({ item }) {
  const { t, localize } = useLanguage();
  const Icon = ICONS[item.icon] || Database;

  return (
    <article className="ui-card dept-card">
      <div className="dept-card__icon" style={{ backgroundColor: `${item.color}18`, color: item.color }}>
        <Icon size={26} aria-hidden="true" />
      </div>
      <h3>{localize(item.name)}</h3>
      <p className="dept-card__tagline">{localize(item.tagline)}</p>
      <p>{localize(item.description).slice(0, 140)}…</p>
      <Link className="text-link" to={`/departments/${item.id}`}>
        {t('departments.viewDetails')} <ArrowUpRight size={16} />
      </Link>
    </article>
  );
}
