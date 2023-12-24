import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
  test('should return profile', () => {
    const data = {
      first: 'vadya',
      lastname: 'programmer',
      age: 10,
      city: 'NN',
      country: Country.Belarus,
      currency: Currency.EUR,
      username: 'admin',
    };

    const state: PartialDeep<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: PartialDeep<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
