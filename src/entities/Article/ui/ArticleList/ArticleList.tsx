import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { HTMLAttributeAnchorTarget } from 'react';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import s from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map((_, index) => (
    <ArticleListItemSkeleton key={index} className={s.card} view={view} />
  ));
};

export const ArticleList = ({
  className, articles, isLoading, view = ArticleView.SMALL, target,
}: ArticleListProps) => {
  const { t } = useTranslation('article');

  const renderArticle = (article: Article) => (
    <ArticleListItem
      key={article.id}
      article={article}
      view={view}
      className={s.card}
      target={target}
    />
  );

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(s.ArticleList, {}, [className, s[view]])}>
        <Text title={t('Article not found')} size={TextSize.L} />
      </div>
    );
  }

  return (
    <div className={classNames(s.ArticleList, {}, [className, s[view]])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
};
