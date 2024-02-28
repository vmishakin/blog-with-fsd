import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { validateProfile } from './validateProfile';
import { ValidateProfileError } from '../../consts/consts';

const userData = {
  first: 'vadya',
  lastname: 'programmer',
  age: 10,
  city: 'NN',
  country: Country.Belarus,
  currency: Currency.EUR,
  username: 'admin',
};

describe('validateProfile.test', () => {
  test('success validation', async () => {
    const result = validateProfile(userData);

    expect(result).toEqual([]);
  });

  test('incorrect age and name', async () => {
    const result = validateProfile({ ...userData, first: '', age: 0 });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });

  test('incorrect country', async () => {
    const result = validateProfile({ ...userData, country: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });
});
