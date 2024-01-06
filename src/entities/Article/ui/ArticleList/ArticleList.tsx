import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { HTMLAttributeAnchorTarget } from 'react';
import {
  List, ListRowProps, WindowScroller,
} from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import s from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
  virtualized?: boolean
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
  virtualized = true,
}: ArticleListProps) => {
  const { t } = useTranslation('article');

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(s.ArticleList, {}, [className, s[view]])}>
        <Text title={t('Article not found')} size={TextSize.L} />
      </div>
    );
  }

  const isBig = view === ArticleView.BIG;

  const itemsPerRow = isBig ? 1 : 3;
  const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

  const rowRenderer = ({
    index, key, style,
  }: ListRowProps) => {
    const article = articles[index];
    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

    for (let i = fromIndex; i < toIndex; i += 1) {
      items.push(
        <ArticleListItem
          key={article.id}
          article={article}
          view={view}
          className={s.card}
          target={target}
        />,
      );
    }

    return (
      <div key={key} style={style} className={s.row}>
        {items}
      </div>
    );
  };

  return (
    <WindowScroller
      scrollElement={document.getElementById(PAGE_ID) as Element}
    >
      {({
        width, height, registerChild, onChildScroll, isScrolling, scrollTop,
      }) => (
        <div ref={registerChild} className={classNames(s.ArticleList, {}, [className, s[view]])}>
          {virtualized ? (
            <List
              autoHeight
              height={height ?? 700}
              rowCount={rowCount}
              rowHeight={isBig ? 700 : 330}
              rowRenderer={rowRenderer}
              width={width ? width - 80 : 700}
              onScroll={onChildScroll}
              isScrolling={isScrolling}
              scrollTop={scrollTop}
            />
          ) : (
            articles.map((article) => (
              <ArticleListItem
                key={article.id}
                article={article}
                view={view}
                className={s.card}
                target={target}
              />
            ))
          )}

          {isLoading && getSkeletons(view)}
        </div>
      )}
    </WindowScroller>
  );
};
