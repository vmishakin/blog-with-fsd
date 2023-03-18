import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import s from './ArticlesPage.module.scss';

interface ArticlesPageProps {

}

export const ArticlesPage = memo(({}: ArticlesPageProps) => {
  const { t } = useTranslation('article');

  return (
    <div className={s.ArticlesPage}>
      ARTICLEs PAGE
    </div>
  );
});
