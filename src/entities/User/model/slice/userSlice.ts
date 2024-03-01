import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from '@/shared/constants/localstorage';
import { User, UserSchema } from '../types/user';
import { setFeatureFlags } from '@/shared/lib/features';

const initialState: UserSchema = {
  _inited: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, { payload }: PayloadAction<User>) => {
      state.authData = payload;
      setFeatureFlags(payload.features);
    },
    initAuthData: (state) => {
      const savedUserData = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (savedUserData) {
        const parsedUser = JSON.parse(savedUserData) as User;
        state.authData = parsedUser;
        setFeatureFlags(parsedUser.features);
      }
      state._inited = true;
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
