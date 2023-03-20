import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { getArticleCommentsIsLoading } from 'pages/ArticleDetailsPage/model/selectors/comments';
import {
  fetchCommentsByArticleId,
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text } from 'shared/ui/Text/Text';
import {
  articleDetailsCommentsReducer, getArticleComments,
} from '../../model/slices/articleDetailsCommentsSlice';
import s from './ArticleDetailsPage.module.scss';

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

export const ArticleDetailsPage = memo(() => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const { id } = useParams<{id: string}>();
  const comments = useSelector(getArticleComments.selectAll);
  const isCommentsLoading = useSelector(getArticleCommentsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id) {
    return (
      <div>
        {t('Article not found')}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={s.ArticleDetailsPage}>
        <ArticleDetails id={id} />
        <Text className={s.commentTitle} title={t('Comments')} />
        <CommentList
          isLoading={isCommentsLoading}
          comments={comments}
        />
      </div>
    </DynamicModuleLoader>
  );
});
