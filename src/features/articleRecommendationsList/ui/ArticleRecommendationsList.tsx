import { useTranslation } from 'react-i18next';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';

import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useGetArticleRecommendationsList } from '../api/articleRecommendationsApi';
import { ToggleFeatures } from '@/shared/lib/features';

export const ArticleRecommendationsList = () => {
  const { t } = useTranslation();
  const {
    data: articles,
    isLoading,
    error,
  } = useGetArticleRecommendationsList(3);

  if (isLoading || error || !articles) {
    return null;
  }

  return (
    <VStack gap="16" data-testid="ArticleRecommendationsList">
      <ToggleFeatures
        name="isAppRedesigned"
        on={<Text size="l" title={t('Recommendations')} />}
        off={<TextDeprecated size={TextSize.L} title={t('Recommendations')} />}
      />
      <ArticleList articles={articles} target="_blank" />
    </VStack>
  );
};
