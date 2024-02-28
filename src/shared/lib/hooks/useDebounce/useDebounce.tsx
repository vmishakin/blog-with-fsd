import { useCallback, useRef } from 'react';

type DebounceFunction = (...args: any[]) => any;

export function useDebounce(callback: DebounceFunction, delay: number) {
  const timer = useRef<number>();

  return useCallback(
    (...args: Parameters<DebounceFunction>) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = window.setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );
}
