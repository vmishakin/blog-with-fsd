import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import s from './ArticleList.module.scss';

interface ArticleListProps {
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map((_, index) => (
    <ArticleListItemSkeleton key={index} className={s.card} view={view} />
  ));
};

export const ArticleList = ({
  articles, isLoading, view = ArticleView.SMALL,
}: ArticleListProps) => {
  if (isLoading) {
    return (
      <div className={classNames(s.ArticleList, {}, [s[view]])}>
        {getSkeletons(view)}
      </div>
    );
  }

  const renderArticle = (article: Article) => (
    <ArticleListItem key={article.id} article={article} view={view} className={s.card} />
  );

  return (
    <div className={classNames(s.ArticleList, {}, [s[view]])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
    </div>
  );
};
