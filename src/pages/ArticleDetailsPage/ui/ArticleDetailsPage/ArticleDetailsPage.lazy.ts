import { lazy } from 'react';

export const ArticleDetailsPageLazy = lazy(() =>
  import('./ArticleDetailsPage').then((m) => ({ default: m.ArticleDetailsPage })),
);
