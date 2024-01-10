import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile/model/types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfile } from '../validateProfile/validateProfile';
import { ValidateProfileError } from '../../consts/consts';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]
>>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;

    const formData = getProfileForm(getState());

    const errors = validateProfile(formData);

    if (errors.length) {
      return rejectWithValue(errors);
    }

    try {
      const response = await extra.api.put(`/profile/${formData?.id}`, formData);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.error(e);
      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  },
);
