import { lazy } from 'react';

export const ArticlesPageLazy = lazy(() =>
  import('./ArticlesPage').then((m) => ({ default: m.ArticlesPage })),
);
