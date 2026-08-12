import React, { useCallback } from 'react';
import AnnouncementCard from '../components/AnnouncementCard';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import Loading from '../components/Loading';
import EmptyState from '../components/EmptyState';
import ErrorState from '../components/ErrorState';
import { announcements } from '../data/announcements';
import useLanguage from '../hooks/useLanguage';
import useFilteredList from '../hooks/useFilteredList';
import useSimulatedLoad from '../hooks/useSimulatedLoad';

export default function Announcements() {
  const { t, localize } = useLanguage();
  const { loading, error, ready, retry } = useSimulatedLoad('announcements');

  const getSearchText = useCallback((item) => `${localize(item.title)} ${localize(item.text)} ${localize(item.category)}`, [localize]);
  const getCategory = useCallback((item) => localize(item.category), [localize]);

  const { query, setQuery, category, setCategory, categories, filtered } = useFilteredList(announcements, {
    getSearchText,
    getCategory,
  });

  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="eyebrow">FCDS</div>
        <h1>{t('announcements.pageTitle')}</h1>
        <p>{t('announcements.pageSubtitle')}</p>
      </section>
      <section className="container content-section">
        <div className="toolbar">
          <SearchBar value={query} onChange={setQuery} placeholder={t('announcements.searchPlaceholder')} />
          <FilterBar
            value={category}
            onChange={setCategory}
            options={categories.map((value) => ({ value, label: value }))}
          />
        </div>
        {loading && <Loading />}
        {error && <ErrorState onRetry={retry} />}
        {ready && !filtered.length && <EmptyState message={t('announcements.empty')} />}
        {ready && filtered.length > 0 && (
          <div className="stack-list">
            {filtered.map((item) => (
              <AnnouncementCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
