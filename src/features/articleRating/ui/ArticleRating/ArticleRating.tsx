import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { RatingCard } from '@/entities/Rating';
import {
  useGetArticleRatingQuery,
  useRateArticleMutation,
} from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

export interface ArticleRatingProps {
  articleId: string;
}

export const ArticleRating = ({ articleId }: ArticleRatingProps) => {
  const userData = useSelector(getUserAuthData);
  const { t } = useTranslation('article');

  const { data, isLoading } = useGetArticleRatingQuery({
    articleId,
    userId: userData?.id ?? '',
  });
  const [rateArticle] = useRateArticleMutation();

  const handleRateArticle = useCallback(
    async (starsCount: number, feedback?: string) => {
      try {
        await rateArticle({
          userId: userData?.id ?? '',
          articleId,
          rate: starsCount,
          feedback,
        });
      } catch (e) {
        console.log(e);
      }
    },
    [articleId, rateArticle, userData?.id],
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateArticle(starsCount, feedback);
    },
    [handleRateArticle],
  );

  const onCancel = useCallback(
    (starsCount: number) => {
      handleRateArticle(starsCount);
    },
    [handleRateArticle],
  );

  if (isLoading) {
    return <Skeleton width="100%" height="120px" />;
  }

  const rating = data?.[0];

  return (
    <RatingCard
      title={t('How do you like the article')}
      feedbackTitle={t('Leave a review about the article')}
      hasFeedback
      rate={rating?.rate}
      onAccept={onAccept}
      onCancel={onCancel}
    />
  );
};
