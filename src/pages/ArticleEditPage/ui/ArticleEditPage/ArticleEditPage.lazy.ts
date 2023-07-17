import { lazy } from 'react';

export const ArticleEditPageLazy = lazy(() => import('./ArticleEditPage')
  .then((m) => ({ default: m.ArticleEditPage })));
