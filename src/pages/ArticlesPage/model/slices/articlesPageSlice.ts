import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/constants/localstorage';
import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (comment) => comment.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPagesSlice = createSlice({
  name: 'articlesPagesSlice',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    ids: [],
    error: undefined,
    entities: {},
    view: ArticleView.SMALL,
  }),
  reducers: {
    setView: (state, { payload }: PayloadAction<ArticleView>) => {
      state.view = payload;
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, payload);
    },
    initState: (state) => {
      state.view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticlesList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        articlesAdapter.setAll(state, payload);
      })
      .addCase(fetchArticlesList.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const {
  reducer: articlesPageReducer,
  actions: articlesPageActions,
} = articlesPagesSlice;
