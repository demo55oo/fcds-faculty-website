import React from 'react';
import useLanguage from '../hooks/useLanguage';

export default function FilterBar({ label, value, options, onChange }) {
  const { t } = useLanguage();
  return (
    <label className="filter-field">
      <span>{label || t('common.filterCategory')}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="all">{t('common.filterAll')}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
