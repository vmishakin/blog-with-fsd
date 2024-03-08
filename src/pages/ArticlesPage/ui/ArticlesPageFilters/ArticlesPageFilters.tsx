import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import s from './ArticlesPageFilters.module.scss';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

export const ArticlesPageFilters = () => {
  const { t } = useTranslation('article');
  const {
    onChangeSort,
    onChangeType,
    sort,
    type,
    onChangeSearch,
    search,
    onChangeView,
    view,
    onChangeOrder,
    order,
  } = useArticleFilters();

  return (
    <div className={s.ArticlesPageFilters}>
      <div className={s.sortWrapper}>
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={s.search}>
        <Input
          placeholder={t('Search')}
          value={search}
          onChange={onChangeSearch}
        />
      </Card>
      <ArticleTypeTabs
        type={type}
        onChangeType={onChangeType}
        className={s.tabs}
      />
    </div>
  );
};
