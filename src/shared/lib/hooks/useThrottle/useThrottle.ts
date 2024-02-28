import { useCallback, useRef } from 'react';

type ThrottleFunction = (...args: any[]) => any;

export function useThrottle(callback: ThrottleFunction, delay: number) {
  const throttleRef = useRef(false);

  return useCallback(
    (...args: Parameters<ThrottleFunction>) => {
      if (!throttleRef.current) {
        callback(...args);
        throttleRef.current = true;

        setTimeout(() => {
          throttleRef.current = false;
        }, delay);
      }
    },
    [callback, delay],
  );
}
