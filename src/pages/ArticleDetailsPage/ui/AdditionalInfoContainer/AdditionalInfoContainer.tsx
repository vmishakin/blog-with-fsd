import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';
import { getArticleDetailsData } from '@/entities/Article';
import s from './AdditionalInfoContainer.module.scss';
import { getRouteArticleEdit } from '@/shared/constants/router';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

export const AdditionalInfoContainer = memo(() => {
  const article = useSelector(getArticleDetailsData);

  const navigate = useNavigate();

  const onEditArticle = useCallback(() => {
    if (article) {
      navigate(getRouteArticleEdit(article.id));
    }
  }, [article, navigate]);

  if (!article) {
    return (
      <Card padding="24" border="round-border" className={s.card_skeleton}>
        <Skeleton width="216px" height="32px" border="8px" />
        <Skeleton width="216px" height="44px" border="8px" />
        <Skeleton width="216px" height="24px" border="8px" />
      </Card>
    );
  }

  return (
    <Card padding="24" border="round-border" className={s.card}>
      <ArticleAdditionalInfo
        onEdit={onEditArticle}
        author={article.user}
        createdAt={article.createdAt}
        views={article.views}
      />
    </Card>
  );
});
