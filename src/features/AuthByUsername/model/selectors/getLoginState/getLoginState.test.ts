import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState.test', () => {
  test('should return login state', () => {
    const state: PartialDeep<StateSchema> = {
      loginForm: {
        error: 'ERROR',
        isLoading: false,
        password: '123321',
        username: 'user',
      },
    };
    expect(getLoginState(state as StateSchema)).toEqual({
      error: 'ERROR',
      isLoading: false,
      password: '123321',
      username: 'user',
    });
  });
});
