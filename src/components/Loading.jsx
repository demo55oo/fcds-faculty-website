import React from 'react';
import useLanguage from '../hooks/useLanguage';

export default function Loading({ label }) {
  const { t } = useLanguage();
  return (
    <div className="state-box" role="status" aria-live="polite">
      <div className="spinner" aria-hidden="true" />
      <p>{label || t('common.loading')}</p>
    </div>
  );
}
