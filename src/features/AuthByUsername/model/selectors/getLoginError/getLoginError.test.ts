import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'ERROR',
        isLoading: false,
        password: '',
        username: '',
      },
    };
    expect(getLoginError(state as StateSchema)).toEqual('ERROR');
  });
});
