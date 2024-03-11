import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Suspense, useCallback } from 'react';
import { CommentList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/addCommentForm';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleDetailsCommentsProps {
  id: string;
}

export const ArticleDetailsComments = ({ id }: ArticleDetailsCommentsProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const isCommentsLoading = useSelector(getArticleCommentsIsLoading);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  return (
    <VStack gap="16" fullWidth>
      <ToggleFeatures
        name="isAppRedesigned"
        on={<Text size="l" title={t('Comments')} />}
        off={<TextDeprecated size={TextSize.L} title={t('Comments')} />}
      />
      <Suspense fallback="Loading...">
        <AddCommentForm onSendComment={onSendComment} />
      </Suspense>
      <CommentList isLoading={isCommentsLoading} comments={comments} />
    </VStack>
  );
};
