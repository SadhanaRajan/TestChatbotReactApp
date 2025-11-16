import { useEffect, useState } from 'react';

const DEFAULT_DELAY = 250;

/**
 * Returns a debounced copy of the given value.
 * The value only updates after it stops changing for the specified delay.
 */
export const useDebounce = (value, delay = DEFAULT_DELAY) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debouncedValue;
};
