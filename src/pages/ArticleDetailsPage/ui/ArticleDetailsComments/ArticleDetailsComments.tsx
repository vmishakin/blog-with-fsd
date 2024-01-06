import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/addCommentForm';
import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { getArticleCommentsIsLoading } from 'pages/ArticleDetailsPage/model/selectors/comments';
import { getArticleComments } from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  addCommentForArticle,
} from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { Suspense, useCallback } from 'react';
import {
  fetchCommentsByArticleId,
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';

interface ArticleDetailsCommentsProps {
  id: string
}

export const ArticleDetailsComments = ({ id }: ArticleDetailsCommentsProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const isCommentsLoading = useSelector(getArticleCommentsIsLoading);

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  return (
    <VStack gap="16" max>
      <Text
        size={TextSize.L}
        title={t('Comments')}
      />
      <Suspense fallback="Loading...">
        <AddCommentForm onSendComment={onSendComment} />
      </Suspense>
      <CommentList isLoading={isCommentsLoading} comments={comments} />
    </VStack>
  );
};
