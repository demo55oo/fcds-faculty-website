import React, { useState } from 'react';
import { CheckCircle2, Clock3, Mail, MapPin, Phone, Send } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import useLanguage from '../hooks/useLanguage';
import { validateContactForm } from '../utils/validateContact';

const initialForm = { name: '', email: '', subject: '', phone: '', message: '' };

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setSuccess(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateContactForm(form, {
      required: t('contact.required'),
      emailError: t('contact.emailError'),
      phoneError: t('contact.phoneError'),
    });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSuccess(true);
      setForm(initialForm);
    }
  };

  const fields = [
    { name: 'name', label: t('contact.name'), type: 'text' },
    { name: 'email', label: t('contact.email'), type: 'email' },
    { name: 'phone', label: t('contact.phone'), type: 'tel' },
    { name: 'subject', label: t('contact.subject'), type: 'text' },
  ];

  return (
    <div className="page-shell">
      <section className="page-hero contact-hero">
        <div className="eyebrow">FCDS / {t('contact.eyebrow')}</div>
        <h1>{t('contact.pageTitle')}</h1>
        <p>{t('contact.pageSubtitle')}</p>
      </section>
      <section className="container content-section contact-layout">
        <aside className="contact-intro">
          <SectionTitle title={t('contact.infoTitle')} align="start" />
          <p>{t('contact.infoText')}</p>
          <div className="info-list">
            <div className="info-row">
              <span className="info-icon">
                <MapPin size={19} />
              </span>
              <div>
                <strong>{t('contact.addressLabel')}</strong>
                <span>{t('contact.address')}</span>
              </div>
            </div>
            <div className="info-row">
              <span className="info-icon">
                <Mail size={19} />
              </span>
              <div>
                <strong>{t('contact.emailLabel')}</strong>
                <a href={`mailto:${t('contact.emailValue')}`}>{t('contact.emailValue')}</a>
              </div>
            </div>
            <div className="info-row">
              <span className="info-icon">
                <Phone size={19} />
              </span>
              <div>
                <strong>{t('contact.phoneLabel')}</strong>
                <span>{t('contact.phoneValue')}</span>
              </div>
            </div>
            <div className="info-row">
              <span className="info-icon">
                <Clock3 size={19} />
              </span>
              <div>
                <strong>{t('contact.hoursLabel')}</strong>
                <span>{t('contact.hours')}</span>
              </div>
            </div>
          </div>
        </aside>

        <div className="contact-form-card">
          <h2>{t('contact.formTitle')}</h2>
          {success && (
            <div className="success-message" role="status">
              <CheckCircle2 size={18} />
              <span>{t('contact.success')}</span>
            </div>
          )}
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              {fields.map((field) => (
                <label key={field.name} className="form-field">
                  {field.label}
                  <input
                    name={field.name}
                    type={field.type}
                    value={form[field.name]}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors[field.name])}
                  />
                  {errors[field.name] && <em>{errors[field.name]}</em>}
                </label>
              ))}
            </div>
            <label className="form-field">
              {t('contact.message')}
              <textarea name="message" rows={5} value={form.message} onChange={handleChange} aria-invalid={Boolean(errors.message)} />
              {errors.message && <em>{errors.message}</em>}
            </label>
            <button type="submit" className="btn-primary submit-btn">
              <Send size={16} /> {t('contact.send')}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
