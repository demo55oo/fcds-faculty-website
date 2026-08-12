import React from 'react';
import ProgramCard from '../components/ProgramCard';
import Loading from '../components/Loading';
import EmptyState from '../components/EmptyState';
import ErrorState from '../components/ErrorState';
import { programs } from '../data/programs';
import useLanguage from '../hooks/useLanguage';
import useSimulatedLoad from '../hooks/useSimulatedLoad';

export default function Programs() {
  const { t } = useLanguage();
  const { loading, error, ready, retry } = useSimulatedLoad('programs');

  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="eyebrow">FCDS</div>
        <h1>{t('programs.pageTitle')}</h1>
        <p>{t('programs.pageSubtitle')}</p>
      </section>
      <section className="container content-section">
        {loading && <Loading />}
        {error && <ErrorState onRetry={retry} />}
        {ready && !programs.length && <EmptyState message={t('programs.empty')} />}
        {ready && programs.length > 0 && (
          <div className="card-grid three">
            {programs.map((item) => (
              <ProgramCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
