import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
  test('should return loading state', () => {
    const state: PartialDeep<StateSchema> = {
      loginForm: {
        error: '',
        isLoading: true,
        password: '',
        username: '',
      },
    };
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
  });
});
