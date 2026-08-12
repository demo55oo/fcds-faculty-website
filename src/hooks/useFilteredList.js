import { useMemo, useState } from 'react';

export default function useFilteredList(items, { getSearchText, getCategory } = {}) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  const categories = useMemo(() => {
    if (!getCategory) return [];
    const values = new Set(items.map((item) => getCategory(item)).filter(Boolean));
    return Array.from(values);
  }, [items, getCategory]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      const matchesCategory = category === 'all' || !getCategory || getCategory(item) === category;
      const text = getSearchText ? getSearchText(item) : '';
      const matchesQuery = !q || text.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [items, query, category, getSearchText, getCategory]);

  return {
    query,
    setQuery,
    category,
    setCategory,
    categories,
    filtered,
  };
}
