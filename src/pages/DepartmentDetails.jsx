import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getDepartmentById } from '../data/departments';
import useLanguage from '../hooks/useLanguage';

export default function DepartmentDetails() {
  const { id } = useParams();
  const { t, localize } = useLanguage();
  const department = getDepartmentById(id);

  if (!department) {
    return (
      <div className="not-found-card">
        <h1>{t('departments.notFound')}</h1>
        <Link className="btn-primary" to="/departments">
          {t('departments.backToDepartments')}
        </Link>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <section className="detail-hero">
        <Link className="back-link" to="/departments">
          <ArrowLeft size={16} /> {t('departments.backToDepartments')}
        </Link>
        <div className="detail-identity">
          <div>
            <div className="eyebrow" style={{ color: department.color }}>
              {department.established}
            </div>
            <h1>{localize(department.name)}</h1>
            <p>{localize(department.tagline)}</p>
          </div>
        </div>
      </section>

      <section className="container content-section detail-layout">
        <div>
          <div className="section-heading">
            <h2>{t('departments.overviewLabel')}</h2>
          </div>
          <p className="detail-copy">{localize(department.description)}</p>

          <div className="section-heading section-heading-spaced">
            <h2>{t('departments.focusLabel')}</h2>
          </div>
          <div className="tag-list">
            {localize(department.focusAreas).map((area) => (
              <span className="tag" key={area}>
                {area}
              </span>
            ))}
          </div>

          <div className="section-heading section-heading-spaced">
            <h2>{t('departments.coreCoursesLabel')}</h2>
          </div>
          <ul className="plain-list">
            {localize(department.coreCourses).map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </div>

        <aside className="ui-card">
          <div className="stats-grid compact">
            <div>
              <strong>{department.stats.students}</strong>
              <span>{t('departments.studentsLabel')}</span>
            </div>
            <div>
              <strong>{department.stats.faculty}</strong>
              <span>{t('departments.facultyLabel')}</span>
            </div>
            <div>
              <strong>{department.stats.courses}</strong>
              <span>{t('departments.coursesLabel')}</span>
            </div>
          </div>
          <Link className="btn-primary full-width" to={`/programs/${department.id}`}>
            {t('departments.relatedProgramLabel')}
          </Link>
        </aside>
      </section>
    </div>
  );
}
