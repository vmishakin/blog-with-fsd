import { ArticleViewSelector } from 'entities/Article';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'shared/ui/Page/Page';
import {
  initArticlesPage,
} from '../../model/services/initArticlesPage/initArticlesPage';
import {
  fetchNextArticlesPage,
} from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from '../../model/slices/articlesPageSlice';
import s from './ArticlesPage.module.scss';

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

export const ArticlesPage = memo(() => {
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  const onChangeView = useCallback((newView) => {
    dispatch(articlesPageActions.setView(newView));
  }, [dispatch]);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage());
  });

  if (error) {
    <span>{error}</span>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onLoadNextPart} className={s.ArticlesPage}>
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList
          view={view}
          isLoading={isLoading}
          articles={articles}
        />
      </Page>
    </DynamicModuleLoader>
  );
});
