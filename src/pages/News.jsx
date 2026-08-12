import React, { useCallback } from 'react';
import NewsCard from '../components/NewsCard';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import Loading from '../components/Loading';
import EmptyState from '../components/EmptyState';
import ErrorState from '../components/ErrorState';
import { news } from '../data/news';
import useLanguage from '../hooks/useLanguage';
import useFilteredList from '../hooks/useFilteredList';
import useSimulatedLoad from '../hooks/useSimulatedLoad';

export default function News() {
  const { t, localize } = useLanguage();
  const { loading, error, ready, retry } = useSimulatedLoad('news');

  const getSearchText = useCallback((item) => `${localize(item.title)} ${localize(item.excerpt)} ${localize(item.category)}`, [localize]);
  const getCategory = useCallback((item) => localize(item.category), [localize]);

  const { query, setQuery, category, setCategory, categories, filtered } = useFilteredList(news, {
    getSearchText,
    getCategory,
  });

  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="eyebrow">FCDS</div>
        <h1>{t('news.pageTitle')}</h1>
        <p>{t('news.pageSubtitle')}</p>
      </section>
      <section className="container content-section">
        <div className="toolbar">
          <SearchBar value={query} onChange={setQuery} placeholder={t('news.searchPlaceholder')} />
          <FilterBar
            value={category}
            onChange={setCategory}
            options={categories.map((value) => ({ value, label: value }))}
          />
        </div>
        {loading && <Loading />}
        {error && <ErrorState onRetry={retry} />}
        {ready && !filtered.length && <EmptyState message={t('news.empty')} />}
        {ready && filtered.length > 0 && (
          <div className="card-grid three">
            {filtered.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
