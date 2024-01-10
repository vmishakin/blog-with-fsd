import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
  test('should return form', () => {
    const form = {
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
        form,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });

  test('should work with empty state', () => {
    const state: PartialDeep<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
