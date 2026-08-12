import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';
import { getFacultyById } from '../data/faculty';
import useLanguage from '../hooks/useLanguage';

export default function FacultyDetails() {
  const { id } = useParams();
  const { t, localize } = useLanguage();
  const member = getFacultyById(id);

  if (!member) {
    return (
      <div className="not-found-card">
        <h1>{t('faculty.notFound')}</h1>
        <Link className="btn-primary" to="/faculty">
          {t('faculty.backToFaculty')}
        </Link>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <section className="detail-hero">
        <Link className="back-link" to="/faculty">
          <ArrowLeft size={16} /> {t('faculty.backToFaculty')}
        </Link>
        <div className="detail-identity">
          <div className="avatar avatar-xl">{member.initials}</div>
          <div>
            <span className="faculty-department">{localize(member.department)}</span>
            <h1>{localize(member.name)}</h1>
            <p>{localize(member.role)}</p>
          </div>
        </div>
      </section>
      <section className="container content-section detail-layout">
        <div>
          <p className="detail-copy">{localize(member.bio)}</p>
          <div className="section-heading section-heading-spaced">
            <h2>{t('faculty.expertise')}</h2>
          </div>
          <div className="tag-list">
            {localize(member.expertise).map((skill) => (
              <span className="tag" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
        <aside className="contact-card">
          <h2>{t('faculty.contact')}</h2>
          <div className="contact-detail">
            <Mail size={18} />
            <div>
              <small>{t('faculty.email')}</small>
              <a href={`mailto:${member.email}`}>{member.email}</a>
            </div>
          </div>
          <div className="contact-detail">
            <Phone size={18} />
            <div>
              <small>{t('faculty.phone')}</small>
              <strong>{member.phone}</strong>
            </div>
          </div>
          <div className="contact-detail">
            <MapPin size={18} />
            <div>
              <small>{t('faculty.office')}</small>
              <strong>{localize(member.office)}</strong>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
