import React from 'react';
import { Search } from 'lucide-react';
import useLanguage from '../hooks/useLanguage';

export default function SearchBar({ value, onChange, placeholder }) {
  const { t } = useLanguage();
  return (
    <label className="search-field">
      <Search size={18} aria-hidden="true" />
      <span className="sr-only">{placeholder || t('common.search')}</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder || t('common.search')}
      />
    </label>
  );
}
