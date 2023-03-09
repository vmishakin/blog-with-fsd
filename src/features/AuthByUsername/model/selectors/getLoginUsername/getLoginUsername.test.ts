import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
  test('should return username', () => {
    const state: DeepPartial<StateSchema> = {
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
    const state: DeepPartial<StateSchema> = {
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
