import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesPageIsLoading = (state: StateSchema) => {
  return state.articlesPage?.isLoading || false;
};
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view;
