import { StateSchema } from '@/app/providers/StoreProvider';
import {
  getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading,
} from './articleDetails';

describe('articleDetails.test', () => {
  test('should return article data', () => {
    const data = {
      id: '1',
      title: 'title',
    };

    const state: PartialDeep<StateSchema> = {
      articleDetails: {
        data,
      },
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });

  test('should work with empty data state', () => {
    const state: PartialDeep<StateSchema> = {};
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });

  test('should return article error', () => {
    const state: PartialDeep<StateSchema> = {
      articleDetails: {
        error: 'error',
      },
    };
    expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
  });

  test('should work with empty error state', () => {
    const state: PartialDeep<StateSchema> = {};
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });

  test('should return article isLoading', () => {
    const state: PartialDeep<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should work with empty isLoading state', () => {
    const state: PartialDeep<StateSchema> = {};
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });
});
