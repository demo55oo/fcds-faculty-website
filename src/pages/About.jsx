import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Eye, Mail, MapPin, Target } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import useLanguage from '../hooks/useLanguage';
import { images } from '../assets';

export default function About() {
  const { t } = useLanguage();
  const values = t('about.values', { returnObjects: true });

  const stats = [
    { label: t('about.stats.foundedLabel'), value: t('about.stats.foundedValue') },
    { label: t('about.stats.programsLabel'), value: '6' },
    { label: t('about.stats.studentsLabel'), value: '800+' },
    { label: t('about.stats.facultyLabel'), value: '55+' },
  ];

  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="eyebrow">FCDS</div>
        <h1>{t('about.heroTitle')}</h1>
        <p>{t('about.heroSubtitle')}</p>
      </section>

      <section className="container content-section">
        <div className="ui-card dean-card">
          <img
            src={images.dean}
            alt={t('about.deanName')}
            className="dean-photo"
          />
          <div>
            <h2>{t('about.deanTitle')}</h2>
            <p className="dean-name">{t('about.deanName')}</p>
            <p>{t('about.deanMessage')}</p>
          </div>
        </div>
      </section>

      <section className="container content-section">
        <div className="card-grid two">
          <div className="ui-card">
            <Eye size={28} color="var(--secondary)" aria-hidden="true" />
            <h3>{t('about.visionTitle')}</h3>
            <p>{t('about.visionText')}</p>
          </div>
          <div className="ui-card">
            <Target size={28} color="var(--secondary)" aria-hidden="true" />
            <h3>{t('about.missionTitle')}</h3>
            <p>{t('about.missionText')}</p>
          </div>
        </div>
      </section>

      <section className="container content-section">
        <SectionTitle title={t('about.valuesTitle')} />
        <div className="card-grid four">
          {Array.isArray(values) &&
            values.map((value) => (
              <div key={value.title} className="ui-card center-card">
                <Award size={26} color="var(--accent)" aria-hidden="true" />
                <h4>{value.title}</h4>
                <p>{value.desc}</p>
              </div>
            ))}
        </div>
      </section>

      <section className="container content-section">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="ui-card stat-card">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container content-section">
        <div className="ui-card about-strip">
          <div className="footer-contact">
            <MapPin size={20} aria-hidden="true" />
            <span>{t('about.locationValue')}</span>
          </div>
          <div className="footer-contact">
            <Mail size={20} aria-hidden="true" />
            <span>fcds-dean@alexu.edu.eg</span>
          </div>
          <Link to="/contact" className="btn-primary">
            {t('about.contactCta')}
          </Link>
        </div>
      </section>
    </div>
  );
}
