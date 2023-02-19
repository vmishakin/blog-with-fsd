import { lazy } from 'react';

export const AboutPageLazy = lazy(() => import('./AboutPage')
  .then((m) => ({ default: m.AboutPage })));
