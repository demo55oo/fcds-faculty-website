import React, { useCallback } from 'react';
import EventCard from '../components/EventCard';
import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';
import EmptyState from '../components/EmptyState';
import ErrorState from '../components/ErrorState';
import { events } from '../data/events';
import useLanguage from '../hooks/useLanguage';
import useFilteredList from '../hooks/useFilteredList';
import useSimulatedLoad from '../hooks/useSimulatedLoad';

export default function Events() {
  const { t, localize } = useLanguage();
  const { loading, error, ready, retry } = useSimulatedLoad('events');

  const getSearchText = useCallback(
    (item) => `${localize(item.title)} ${localize(item.excerpt)} ${localize(item.location)}`,
    [localize],
  );

  const { query, setQuery, filtered } = useFilteredList(events, { getSearchText });

  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="eyebrow">FCDS</div>
        <h1>{t('events.pageTitle')}</h1>
        <p>{t('events.pageSubtitle')}</p>
      </section>
      <section className="container content-section">
        <div className="toolbar">
          <SearchBar value={query} onChange={setQuery} placeholder={t('events.searchPlaceholder')} />
        </div>
        {loading && <Loading />}
        {error && <ErrorState onRetry={retry} />}
        {ready && !filtered.length && <EmptyState message={t('events.empty')} />}
        {ready && filtered.length > 0 && (
          <div className="card-grid two">
            {filtered.map((item) => (
              <EventCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
