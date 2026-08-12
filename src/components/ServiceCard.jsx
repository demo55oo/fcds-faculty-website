import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BookOpen, Briefcase, CalendarDays, GraduationCap, HeartHandshake, Monitor } from 'lucide-react';
import useLanguage from '../hooks/useLanguage';

const ICONS = {
  GraduationCap,
  BookOpen,
  Briefcase,
  Monitor,
  CalendarDays,
  HeartHandshake,
};

export default function ServiceCard({ item, index = 0 }) {
  const { t, localize } = useLanguage();
  const Icon = ICONS[item.icon] || GraduationCap;

  return (
    <article className="service-card">
      <div className="service-number">0{index + 1}</div>
      <div className="service-icon" aria-hidden="true">
        <Icon size={28} />
      </div>
      <h2>{localize(item.title)}</h2>
      <p>{localize(item.description)}</p>
      <Link className="text-link" to="/contact">
        {localize(item.cta)} <ArrowUpRight size={16} />
      </Link>
    </article>
  );
}
