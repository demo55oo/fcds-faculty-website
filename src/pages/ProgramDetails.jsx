import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getProgramById } from '../data/programs';
import useLanguage from '../hooks/useLanguage';

export default function ProgramDetails() {
  const { id } = useParams();
  const { t, localize, lang } = useLanguage();
  const program = getProgramById(id);

  if (!program) {
    return (
      <div className="not-found-card">
        <h1>{t('programs.notFound')}</h1>
        <Link className="btn-primary" to="/programs">
          {t('programs.backToPrograms')}
        </Link>
      </div>
    );
  }

  const levels = program.levels[lang] || program.levels.en;

  return (
    <div className="page-shell">
      <section className="detail-hero">
        <Link className="back-link" to="/programs">
          <ArrowLeft size={16} /> {t('programs.backToPrograms')}
        </Link>
        <div className="detail-identity">
          <div>
            <h1>{localize(program.degree)}</h1>
            <p>{localize(program.summary)}</p>
          </div>
        </div>
      </section>

      <section className="container content-section detail-layout">
        <div>
          <div className="section-heading">
            <h2>{t('programs.curriculumLabel')}</h2>
          </div>
          <div className="stack-list">
            {levels.map((level) => (
              <div className="ui-card" key={level.level}>
                <h3>{level.level}</h3>
                <ul className="plain-list">
                  {level.courses.map((course) => (
                    <li key={course}>{course}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="section-heading section-heading-spaced">
            <h2>{t('programs.careerPathsLabel')}</h2>
          </div>
          <div className="tag-list">
            {localize(program.careerPaths).map((path) => (
              <span className="tag" key={path}>
                {path}
              </span>
            ))}
          </div>

          <div className="section-heading section-heading-spaced">
            <h2>{t('programs.admissionLabel')}</h2>
          </div>
          <ul className="plain-list">
            {localize(program.admission).map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </div>

        <aside className="ui-card">
          <p>
            <strong>{t('programs.durationLabel')}:</strong> {localize(program.duration)}
          </p>
          <p>
            <strong>{t('programs.creditHoursLabel')}:</strong> {program.creditHours}
          </p>
          <div className="service-cta compact">
            <div>
              <h2>{t('programs.applyTitle')}</h2>
            </div>
            <Link className="btn-primary" to="/contact">
              {t('programs.applyCta')}
            </Link>
          </div>
        </aside>
      </section>
    </div>
  );
}
