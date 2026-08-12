import { useCallback, useEffect, useState } from 'react';

/** Simulates async loading so Loading / Error / Empty states can be demonstrated with mock data. */
export default function useSimulatedLoad(dependencyKey = 'default', { delay = 450 } = {}) {
  const [status, setStatus] = useState('loading');
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setStatus('loading');
    const timer = setTimeout(() => {
      if (!cancelled) setStatus('success');
    }, delay);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [dependencyKey, delay, tick]);

  const retry = useCallback(() => setTick((value) => value + 1), []);
  const simulateError = useCallback(() => setStatus('error'), []);

  return {
    loading: status === 'loading',
    error: status === 'error',
    ready: status === 'success',
    retry,
    simulateError,
  };
}
