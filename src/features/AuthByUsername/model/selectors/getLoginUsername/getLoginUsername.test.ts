import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
  test('should return username', () => {
    const state: PartialDeep<StateSchema> = {
      loginForm: {
        error: '',
        isLoading: false,
        password: '',
        username: 'vasya',
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('vasya');
  });

  test('should return username', () => {
    const state: PartialDeep<StateSchema> = {
      loginForm: {
        error: '',
        isLoading: false,
        password: '',
        username: 'vasya',
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('vasya');
  });
});
