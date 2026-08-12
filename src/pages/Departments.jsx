import React from 'react';
import DepartmentCard from '../components/DepartmentCard';
import Loading from '../components/Loading';
import EmptyState from '../components/EmptyState';
import ErrorState from '../components/ErrorState';
import { departments } from '../data/departments';
import useLanguage from '../hooks/useLanguage';
import useSimulatedLoad from '../hooks/useSimulatedLoad';

export default function Departments() {
  const { t } = useLanguage();
  const { loading, error, ready, retry } = useSimulatedLoad('departments');

  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="eyebrow">FCDS</div>
        <h1>{t('departments.pageTitle')}</h1>
        <p>{t('departments.pageSubtitle')}</p>
      </section>
      <section className="container content-section">
        {loading && <Loading />}
        {error && <ErrorState onRetry={retry} />}
        {ready && !departments.length && <EmptyState message={t('departments.empty')} />}
        {ready && departments.length > 0 && (
          <div className="card-grid three">
            {departments.map((item) => (
              <DepartmentCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
