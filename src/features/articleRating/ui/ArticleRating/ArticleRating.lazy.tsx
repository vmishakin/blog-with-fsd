import { Suspense, lazy } from 'react';
import { ArticleRatingProps } from '@/features/articleRating/ui/ArticleRating/ArticleRating';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export const ArticleRatingLazy = lazy(() => import('./ArticleRating')
  .then((m) => ({ default: m.ArticleRating })));

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
  return (
    <Suspense fallback={<Skeleton width="100%" height={140} />}>
      <ArticleRatingLazy {...props} />
    </Suspense>
  );
};
