import React from 'react';
import useLanguage from '../hooks/useLanguage';

export default function ErrorState({ onRetry }) {
  const { t } = useLanguage();
  return (
    <div className="state-box error-state" role="alert">
      <h3>{t('common.errorTitle')}</h3>
      <p>{t('common.errorDesc')}</p>
      {onRetry && (
        <button type="button" className="btn-primary" onClick={onRetry}>
          {t('common.retry')}
        </button>
      )}
    </div>
  );
}
