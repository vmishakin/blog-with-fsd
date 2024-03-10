import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, userActions } from '@/entities/User';
import i18n from '@/shared/config/i18n/i18n';
import { getFeatureFlag } from '@/shared/lib/features/lib/setGetFeatures';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>('login/loginByUsername', async (authData, thunkApi) => {
  const { extra, dispatch, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.post('/login', authData);

    if (!response.data) {
      throw new Error();
    }

    const currentRedisignedState = getFeatureFlag('isAppRedesigned');

    dispatch(userActions.setAuthData(response.data));

    if (response.data.features?.isAppRedesigned !== currentRedisignedState) {
      window.location.reload();
    }

    return response.data;
  } catch (e) {
    console.error(e);
    return rejectWithValue(i18n.t('Invalid username or password'));
  }
});
