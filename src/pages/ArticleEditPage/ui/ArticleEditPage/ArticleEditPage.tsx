import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import s from './ArticleEditPage.module.scss';

export const ArticleEditPage = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <Page className={classNames(s.ArticleEditPage)}>
      {isEdit ? t('Edit article with ID') + id : t('Create new article')}
    </Page>
  );
};
