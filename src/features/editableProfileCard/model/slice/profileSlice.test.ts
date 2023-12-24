import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ValidateProfileError, ProfileSchema } from '../types/editableProfileCardSchema';
import { profileActions, profileReducer } from './profileSlice';

const userData = {
  first: 'vadya',
  lastname: 'programmer',
  age: 10,
  city: 'NN',
  country: Country.Belarus,
  currency: Currency.EUR,
  username: 'admin',
};

describe('profileSlice.test', () => {
  test('test set readonly', () => {
    const state: PartialDeep<ProfileSchema> = {
      readonly: false,
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.setReadonly(true),
      ),
    ).toEqual({ readonly: true });
  });

  test('test cancel edit', () => {
    const state: PartialDeep<ProfileSchema> = { data: userData, form: { username: '' } };

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.cancelEdit(),
      ),
    ).toEqual({
      readonly: true,
      validateError: undefined,
      data: userData,
      form: userData,
    });
  });

  test('test updateProfile', () => {
    const state: PartialDeep<ProfileSchema> = {
      form: userData,
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ username: 'lol' }),
      ),
    ).toEqual({ form: { ...userData, username: 'lol' } });
  });

  test('test updateProfile service pending', () => {
    const state: PartialDeep<ProfileSchema> = {
      isLoading: false,
      validateError: [ValidateProfileError.SERVER_ERROR],
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.pending,
      ),
    ).toEqual({
      isLoading: true,
      validateError: undefined,
    });
  });

  test('test updateProfile service fulfilled', () => {
    const state: PartialDeep<ProfileSchema> = {
      isLoading: true,
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(userData, ''),
      ),
    ).toEqual({
      isLoading: false,
      data: userData,
      form: userData,
      readonly: true,
      validateError: undefined,
    });
  });
});
