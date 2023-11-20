import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/addCommentForm';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page/Page';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import {
  ArticleDetailsPageHeader,
} from '../../ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import {
  fetchArticleRecommendations,
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../../model/slices/index';
import {
  getArticleRecommendationsIsLoading,
} from '../../model/selectors/recommendations';
import {
  getArticleRecommendations,
} from '../../model/slices/articleDetailsRecommendationsSlice';
import {
  fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
  addCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import {
  getArticleComments,
} from '../../model/slices/articleDetailsCommentsSlice';
import s from './ArticleDetailsPage.module.scss';

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

export const ArticleDetailsPage = memo(() => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const { id } = useParams<{id: string}>();
  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const isCommentsLoading = useSelector(getArticleCommentsIsLoading);
  const isRecommendationsLoading = useSelector(getArticleRecommendationsIsLoading);

  const onSendComment = useCallback((text) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  if (!id) {
    return (
      <Page>
        {t('Article not found')}
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={s.ArticleDetailsPage}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <Text size={TextSize.L} className={s.commentTitle} title={t('Recommendations')} />
        <ArticleList
          articles={recommendations}
          isLoading={isRecommendationsLoading}
          className={s.recommendations}
          target="_blank"
        />
        <Text size={TextSize.L} className={s.commentTitle} title={t('Comments')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList
          isLoading={isCommentsLoading}
          comments={comments}
        />
      </Page>
    </DynamicModuleLoader>
  );
});
