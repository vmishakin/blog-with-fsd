import { ArticleDetails } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import s from './ArticleDetailsPage.module.scss';

export const ArticleDetailsPage = memo(() => {
  const { t } = useTranslation('article');
  const { id } = useParams<{id: string}>();

  if (!id) {
    return (
      <div>
        {t('Article not found')}
      </div>
    );
  }

  return (
    <div className={s.ArticleDetailsPage}>
      <ArticleDetails id={id} />
    </div>
  );
});
