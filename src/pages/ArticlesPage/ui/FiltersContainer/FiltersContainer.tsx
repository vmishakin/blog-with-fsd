import { memo } from 'react';
import { ArticleFilters } from '@/widgets/ArticleFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
  className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
  const { className } = props;
  const {
    onChangeSort,
    onChangeType,
    sort,
    type,
    onChangeSearch,
    search,
    onChangeOrder,
    order,
  } = useArticleFilters();

  return (
    <ArticleFilters
      type={type}
      onChangeSearch={onChangeSearch}
      order={order}
      onChangeOrder={onChangeOrder}
      search={search}
      sort={sort}
      onChangeSort={onChangeSort}
      onChangeType={onChangeType}
      className={className}
    />
  );
});
