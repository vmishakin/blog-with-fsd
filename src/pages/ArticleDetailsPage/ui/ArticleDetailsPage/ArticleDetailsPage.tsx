import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import s from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {

}

export const ArticleDetailsPage = memo(({}: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article');
  
  return (
    <div className={s.ArticleDetailsPage}>
      ARTICLE DETAILS
    </div>
  );
});
