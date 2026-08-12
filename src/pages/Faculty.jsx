import React, { useCallback } from 'react';
import FacultyCard from '../components/FacultyCard';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import Loading from '../components/Loading';
import EmptyState from '../components/EmptyState';
import ErrorState from '../components/ErrorState';
import SectionTitle from '../components/SectionTitle';
import { faculty } from '../data/faculty';
import useLanguage from '../hooks/useLanguage';
import useFilteredList from '../hooks/useFilteredList';
import useSimulatedLoad from '../hooks/useSimulatedLoad';

export default function Faculty() {
  const { t, localize } = useLanguage();
  const { loading, error, ready, retry } = useSimulatedLoad('faculty');

  const getSearchText = useCallback(
    (member) => `${localize(member.name)} ${localize(member.department)} ${localize(member.role)}`,
    [localize],
  );
  const getCategory = useCallback((member) => localize(member.department), [localize]);

  const { query, setQuery, category, setCategory, categories, filtered } = useFilteredList(faculty, {
    getSearchText,
    getCategory,
  });

  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="eyebrow">FCDS</div>
        <h1>{t('faculty.pageTitle')}</h1>
        <p>{t('faculty.pageSubtitle')}</p>
      </section>
      <section className="container content-section">
        <div className="faculty-toolbar">
          <SectionTitle title={t('faculty.pageTitle')} subtitle={`${faculty.length} ${t('faculty.results')}`} align="start" />
          <div className="toolbar">
            <SearchBar value={query} onChange={setQuery} placeholder={t('faculty.searchPlaceholder')} />
            <FilterBar
              label={t('common.filterDepartment')}
              value={category}
              onChange={setCategory}
              options={categories.map((value) => ({ value, label: value }))}
            />
          </div>
        </div>
        {loading && <Loading />}
        {error && <ErrorState onRetry={retry} />}
        {ready && !filtered.length && <EmptyState message={t('faculty.empty')} />}
        {ready && filtered.length > 0 && (
          <div className="faculty-grid">
            {filtered.map((member) => (
              <FacultyCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
