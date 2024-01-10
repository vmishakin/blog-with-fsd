import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
  test('should return password', () => {
    const state: PartialDeep<StateSchema> = {
      loginForm: {
        error: '',
        isLoading: false,
        password: '123321',
        username: '',
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('123321');
  });
});
