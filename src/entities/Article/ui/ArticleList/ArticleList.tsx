import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import s from './ArticleList.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((_, index) => (
      <ArticleListItemSkeleton key={index} className={s.card} view={view} />
    ));
};

export const ArticleList = ({
  className,
  articles,
  isLoading,
  view = ArticleView.SMALL,
  target,
}: ArticleListProps) => {
  const { t } = useTranslation('article');

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(s.ArticleList, {}, [className, s[view]])}>
        <Text title={t('Article not found')} size={TextSize.L} />
      </div>
    );
  }

  return (
    <ToggleFeatures
      name="isAppRedesigned"
      on={
        <HStack
          wrap="wrap"
          gap="16"
          className={classNames(s.ArticleListRedesigned, {}, [])}
          data-testid="ArticleList"
        >
          {articles.map((item) => (
            <ArticleListItem
              article={item}
              view={view}
              target={target}
              key={item.id}
              className={s.card}
            />
          ))}
          {isLoading && getSkeletons(view)}
        </HStack>
      }
      off={
        <div
          className={classNames(s.ArticleList, {}, [className, s[view]])}
          data-testid="ArticleList"
        >
          {articles.map((item) => (
            <ArticleListItem
              article={item}
              view={view}
              target={target}
              key={item.id}
              className={s.card}
            />
          ))}
          {isLoading && getSkeletons(view)}
        </div>
      }
    />
  );
};
