import { Suspense, lazy } from 'react';
import { ArticleRatingProps } from './ArticleRating';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { ToggleFeatures } from '@/shared/lib/features';

export const ArticleRatingLazy = lazy(() =>
  import('./ArticleRating').then((m) => ({ default: m.ArticleRating })),
);

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
  return (
    <Suspense
      fallback={
        <ToggleFeatures
          name="isAppRedesigned"
          on={<SkeletonRedesigned width="100%" height="140px" />}
          off={<SkeletonDeprecated width="100%" height="140px" />}
        />
      }
    >
      <ArticleRatingLazy {...props} />
    </Suspense>
  );
};
