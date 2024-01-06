import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateError } from './getProfileValidateError';
import { ValidateProfileError } from '../../consts/consts';

describe('getProfileValidateError.test', () => {
  test('should return validate error', () => {
    const state: PartialDeep<StateSchema> = {
      profile: {
        validateError: [
          ValidateProfileError.INCORRECT_USER_DATA,
          ValidateProfileError.INCORRECT_AGE,
        ],
      },
    };
    expect(getProfileValidateError(state as StateSchema)).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });

  test('should work with empty state', () => {
    const state: PartialDeep<StateSchema> = {};
    expect(getProfileValidateError(state as StateSchema)).toEqual(undefined);
  });
});
