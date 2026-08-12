import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import NewsCard from '../components/NewsCard';
import AnnouncementCard from '../components/AnnouncementCard';
import ProgramCard from '../components/ProgramCard';
import ServiceCard from '../components/ServiceCard';
import EventCard from '../components/EventCard';
import HighlightCard from '../components/HighlightCard';
import { news } from '../data/news';
import { announcements } from '../data/announcements';
import { programs } from '../data/programs';
import { services } from '../data/services';
import { events } from '../data/events';
import { highlightCards } from '../assets';
import useLanguage from '../hooks/useLanguage';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const QUICK_LINKS = [
  { to: '/departments', key: 'departments' },
  { to: '/programs', key: 'programs' },
  { to: '/faculty', key: 'faculty' },
  { to: '/announcements', key: 'announcements' },
  { to: '/services', key: 'services' },
  { to: '/contact', key: 'contact' },
];

export default function Home() {
  const { t } = useLanguage();
  useRevealOnScroll();

  const stats = [
    { label: t('home.students'), count: '800+' },
    { label: t('home.departmentsCount'), count: '6' },
    { label: t('home.facultyMembers'), count: '55+' },
  ];

  return (
    <div>
      <Hero />

      <section className="container home-section">
        <SectionTitle title={t('home.introTitle')} subtitle={t('home.introDesc')} />
        <div className="stats-grid">
          {stats.map((item) => (
            <div key={item.label} className="ui-card stat-card reveal">
              <h3>{item.count}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-band">
        <div className="container home-section">
          <SectionTitle title={t('home.highlightsTitle')} subtitle={t('home.highlightsSubtitle')} />
          <div className="card-grid three">
            {highlightCards.map((item) => (
              <HighlightCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="container home-section">
        <div className="section-head">
          <SectionTitle title={t('home.newsTitle')} subtitle={t('home.newsSubtitle')} align="start" />
          <Link className="text-link" to="/news">
            {t('common.viewAll')}
          </Link>
        </div>
        <div className="card-grid three">
          {news.slice(0, 3).map((item) => (
            <div key={item.id} className="reveal">
              <NewsCard item={item} />
            </div>
          ))}
        </div>
      </section>

      <section className="section-band">
        <div className="container home-section">
          <div className="section-head">
            <SectionTitle title={t('home.announcementsTitle')} subtitle={t('home.announcementsSubtitle')} align="start" />
            <Link className="text-link" to="/announcements">
              {t('common.viewAll')}
            </Link>
          </div>
          <div className="stack-list">
            {announcements.slice(0, 3).map((item) => (
              <div key={item.id} className="reveal">
                <AnnouncementCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container home-section">
        <div className="section-head">
          <SectionTitle title={t('home.programsTitle')} subtitle={t('home.programsSubtitle')} align="start" />
          <Link className="text-link" to="/programs">
            {t('common.viewAll')}
          </Link>
        </div>
        <div className="card-grid three">
          {programs.slice(0, 3).map((item) => (
            <div key={item.id} className="reveal">
              <ProgramCard item={item} />
            </div>
          ))}
        </div>
      </section>

      <section className="container home-section">
        <div className="section-head">
          <SectionTitle title={t('home.servicesTitle')} subtitle={t('home.servicesSubtitle')} align="start" />
          <Link className="text-link" to="/services">
            {t('common.viewAll')}
          </Link>
        </div>
        <div className="services-grid">
          {services.slice(0, 3).map((item, index) => (
            <div key={item.id} className="reveal">
              <ServiceCard item={item} index={index} />
            </div>
          ))}
        </div>
      </section>

      <section className="container home-section">
        <SectionTitle title={t('home.quickLinksTitle')} subtitle={t('home.quickLinksSubtitle')} />
        <div className="quick-links">
          {QUICK_LINKS.map((link) => (
            <Link key={link.to} to={link.to} className="quick-link reveal">
              {t(`nav.${link.key}`)}
            </Link>
          ))}
        </div>
      </section>

      <section className="section-band">
        <div className="container home-section">
          <div className="section-head">
            <SectionTitle title={t('home.eventsTitle')} subtitle={t('home.eventsSubtitle')} align="start" />
            <Link className="text-link" to="/events">
              {t('common.viewAll')}
            </Link>
          </div>
          <div className="card-grid two">
            {events.slice(0, 2).map((item) => (
              <div key={item.id} className="reveal">
                <EventCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
