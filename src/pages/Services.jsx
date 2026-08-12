import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import Loading from '../components/Loading';
import EmptyState from '../components/EmptyState';
import ErrorState from '../components/ErrorState';
import { services } from '../data/services';
import useLanguage from '../hooks/useLanguage';
import useSimulatedLoad from '../hooks/useSimulatedLoad';

export default function Services() {
  const { t } = useLanguage();
  const { loading, error, ready, retry } = useSimulatedLoad('services');

  return (
    <div className="page-shell">
      <section className="page-hero service-hero">
        <div className="eyebrow">FCDS / {t('services.eyebrow')}</div>
        <h1>{t('services.pageTitle')}</h1>
        <p>{t('services.pageSubtitle')}</p>
      </section>
      <section className="container content-section">
        <SectionTitle title={t('services.sectionTitle')} subtitle={t('services.sectionSubtitle')} />
        {loading && <Loading />}
        {error && <ErrorState onRetry={retry} />}
        {ready && !services.length && <EmptyState message={t('services.empty')} />}
        {ready && services.length > 0 && (
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={service.id} item={service} index={index} />
            ))}
          </div>
        )}
        <div className="service-cta">
          <div>
            <h2>{t('services.help')}</h2>
            <p>{t('services.helpText')}</p>
          </div>
          <Link className="btn-primary" to="/contact">
            {t('services.contact')} <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}
