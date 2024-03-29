import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
  test('test set username', () => {
    const state: PartialDeep<LoginSchema> = {
      username: 'petya',
    };
    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername('vasya')),
    ).toEqual({
      username: 'vasya',
    });
  });

  test('test set password', () => {
    const state: PartialDeep<LoginSchema> = {
      password: '123',
    };
    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword('322')),
    ).toEqual({
      password: '322',
    });
  });
});
