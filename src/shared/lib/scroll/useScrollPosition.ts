import { useCallback, useLayoutEffect, useState } from 'react';
import { ScrollPosition, getScrollPosition } from './getScrollPosition';

export type ScrollCondition = ({ x, y }: ScrollPosition) => boolean;

export function useScrollPosition(condition: ScrollCondition) {
  const [triggered, setTriggered] = useState<boolean>(false);

  const updateScrollPosition = useCallback(() => {
    if (condition(getScrollPosition())) {
      setTriggered(true);
    } else {
      setTriggered(false);
    }
  }, [condition]);

  useLayoutEffect(() => {
    window.addEventListener('scroll', updateScrollPosition);

    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, [updateScrollPosition]);

  return triggered;
}
