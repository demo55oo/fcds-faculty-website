import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail } from 'lucide-react';
import useLanguage from '../hooks/useLanguage';

export default function FacultyCard({ member }) {
  const { t, localize } = useLanguage();

  return (
    <article className="faculty-card">
      <div className="faculty-card-top">
        <div className="avatar avatar-lg">{member.initials}</div>
        <span className="faculty-department">{localize(member.department)}</span>
      </div>
      <h2>{localize(member.name)}</h2>
      <p className="faculty-role">{localize(member.role)}</p>
      <p className="faculty-bio">{localize(member.bio)}</p>
      <div className="faculty-card-actions">
        <Link className="text-link" to={`/faculty/${member.id}`}>
          {t('faculty.viewProfile')} <ArrowUpRight size={16} />
        </Link>
        <a className="icon-link" href={`mailto:${member.email}`} aria-label={`${t('faculty.contact')} ${localize(member.name)}`}>
          <Mail size={18} />
        </a>
      </div>
    </article>
  );
}
