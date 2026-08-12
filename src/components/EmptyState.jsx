import React from 'react';
import useLanguage from '../hooks/useLanguage';

export default function EmptyState({ message }) {
  const { t } = useLanguage();
  return (
    <div className="state-box empty-state" role="status">
      <p>{message || t('common.empty')}</p>
    </div>
  );
}
