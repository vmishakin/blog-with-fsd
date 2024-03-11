import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Page } from '@/widgets/Page';
import { articleDetailsPageReducer } from '../../model/slices/index';
import { ArticleDetailsPageHeader } from '../../ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleRating } from '@/features/articleRating';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import s from './ArticleDetailsPage.module.scss';
import { Card } from '@/shared/ui/deprecated/Card';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DetailsContainer } from '../DetailsContainer/DetailsContainer';
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer';

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

export const ArticleDetailsPage = memo(() => {
  const { t } = useTranslation('article');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Page>{t('Article not found')}</Page>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ToggleFeatures
        name="isAppRedesigned"
        on={
          <StickyContentLayout
            content={
              <Page className={classNames(s.ArticleDetailsPage, {}, [])}>
                <VStack gap="16" fullWidth>
                  <DetailsContainer id={id} />
                  <ArticleRating articleId={id} />
                  <ArticleRecommendationsList />
                  <ArticleDetailsComments id={id} />
                </VStack>
              </Page>
            }
            right={<AdditionalInfoContainer />}
          />
        }
        off={
          <Page className={s.ArticleDetailsPage}>
            <VStack gap="16" fullWidth>
              <ArticleDetailsPageHeader />
              <ArticleDetails id={id} />
              <ToggleFeatures
                name="isArticleRatingEnabled"
                on={<ArticleRating articleId={id} />}
                off={<Card>{t('Оценка статей скоро появится!')}</Card>}
              />
              <ArticleRecommendationsList />
              <ArticleDetailsComments id={id} />
            </VStack>
          </Page>
        }
      />
    </DynamicModuleLoader>
  );
});
