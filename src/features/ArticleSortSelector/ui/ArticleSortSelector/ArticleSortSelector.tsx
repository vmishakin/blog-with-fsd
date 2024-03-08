import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from '@/shared/ui/deprecated/Select';
import { SortOrder } from '@/shared/types/sort';
import { ArticleSortField } from '@/entities/Article';
import s from './ArticleSortSelector.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = ({
  className,
  sort,
  onChangeOrder,
  onChangeSort,
  order,
}: ArticleSortSelectorProps) => {
  const { t } = useTranslation('article');

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: 'asc',
        content: t('ascending'),
      },
      {
        value: 'desc',
        content: t('descending'),
      },
    ],
    [t],
  );

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
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
    ],
    [t],
  );

  return (
    <ToggleFeatures
      name="isAppRedesigned"
      on={
        <div
          className={classNames(s.ArticleSortSelectorRedesigned, {}, [
            className,
          ])}
        >
          <VStack gap="8">
            <Text text={t('Сортировать по:')} />
            <ListBox<ArticleSortField>
              items={sortFieldOptions}
              value={sort}
              onChange={onChangeSort}
            />
            <ListBox<SortOrder>
              items={orderOptions}
              value={order}
              onChange={onChangeOrder}
            />
          </VStack>
        </div>
      }
      off={
        <div className={classNames(s.ArticleSortSelector, {}, [className])}>
          <Select<ArticleSortField>
            options={sortFieldOptions}
            label={t('Сортировать ПО')}
            value={sort}
            onChange={onChangeSort}
          />
          <Select
            options={orderOptions}
            label={t('по')}
            value={order}
            onChange={onChangeOrder}
            className={s.order}
          />
        </div>
      }
    />
  );
};
