import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
  isLoading: false,
  username: '',
  password: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, { payload }: PayloadAction<string>) => {
      state.username = payload;
    },
    setPassword: (state, { payload }: PayloadAction<string>) => {
      state.password = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByUsername.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loginByUsername.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
