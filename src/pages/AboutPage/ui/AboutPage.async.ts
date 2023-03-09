import { lazy } from 'react';

export const AboutPageAsync = lazy(() => import('./AboutPage')
  .then((m) => ({ default: m.AboutPage })));
