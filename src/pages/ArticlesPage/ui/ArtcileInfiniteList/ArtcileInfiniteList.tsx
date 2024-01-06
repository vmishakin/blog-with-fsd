import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { useSelector } from 'react-redux';
import {
  getArticlesPageIsLoading,
  getArticlesPageView,
  getArticlesPageError,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { getArticles } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';

interface ArtcileInfiniteListProps {
  className?: string;
}

export const ArtcileInfiniteList = ({
  className,
}: ArtcileInfiniteListProps) => {
  const { t } = useTranslation();
  const error = useSelector(getArticlesPageError);

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);

  if (error) {
    <Text text={t('Error when loading articles')} />;
  }

  return (
    <ArticleList
      view={view}
      isLoading={isLoading}
      articles={articles}
      className={className}
    />
  );
};