import { Select, SelectOption } from 'shared/ui/Select/Select';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from '../../model/types/article';
import s from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  sort: ArticleSortField
  order: SortOrder
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = ({
  sort, onChangeOrder, onChangeSort, order,
}: ArticleSortSelectorProps) => {
  const { t } = useTranslation('article');

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    {
      value: 'asc',
      content: t('ascending'),
    },
    {
      value: 'desc',
      content: t('descending'),
    },
  ], [t]);

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('creation date'),
    },
    {
      value: ArticleSortField.TITLE,
      content: t('title'),
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('views'),
    },
  ], [t]);

  return (
    <div className={s.ArticleSortSelector}>
      <Select<ArticleSortField>
        label={t('Sort by')}
        options={sortFieldOptions}
        value={sort}
        onChange={onChangeSort}
      />
      <Select<SortOrder>
        label={t('asc/desc')}
        options={orderOptions}
        value={order}
        onChange={onChangeOrder}
        className={s.order}
      />
    </div>
  );
};
