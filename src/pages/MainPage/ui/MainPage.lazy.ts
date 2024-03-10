import { lazy } from 'react';

export const MainPageLazy = lazy(() =>
  import('./MainPage').then((m) => ({ default: m.MainPage })),
);
