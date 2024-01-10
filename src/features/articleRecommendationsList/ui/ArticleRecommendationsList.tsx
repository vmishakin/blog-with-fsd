import { useTranslation } from 'react-i18next';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { ArticleList } from '@/entities/Article/ui/ArticleList/ArticleList';
import { VStack } from '@/shared/ui/Stack';
import { useGetArticleRecommendationsList } from '../api/articleRecommendationsApi';

export const ArticleRecommendationsList = () => {
  const { t } = useTranslation();
  const { data: articles, isLoading, error } = useGetArticleRecommendationsList(3);

  if (isLoading || error || !articles) {
    return null;
  }

  return (
    <VStack gap="8">
      <Text size={TextSize.L} title={t('Recommendations')} />
      <ArticleList articles={articles} target="_blank" />
    </VStack>
  );
};
