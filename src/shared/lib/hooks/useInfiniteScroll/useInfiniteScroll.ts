import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollOptions {
  callback?: () => void
  triggerRef: MutableRefObject<HTMLElement>
  wrapperRef: MutableRefObject<HTMLElement>
}

export function useInfiniteScroll({ callback, triggerRef, wrapperRef }: UseInfiniteScrollOptions) {
  useEffect(() => {
    let observer: IntersectionObserver;
    const trigger = triggerRef.current;
    const wrapper = wrapperRef.current;

    if (callback) {
      const options: IntersectionObserverInit = {
        root: wrapper,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(trigger);
    }

    return () => {
      if (observer && trigger) {
        observer.unobserve(trigger);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
}
