import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { AuthMethod, type AuthMethodType } from '@/shared/config/auth/auth';

import type { LoginFormSchema } from '../types/loginFormSchema';

const initialState: LoginFormSchema = {
  email: '',
  phone: '',
  password: '',
  isLoading: false,
  error: undefined,
  method: AuthMethod.EMAIL,
};

export const loginSlice = createSlice({
  name: 'loginForm',
  initialState,

  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setMethod: (state, action: PayloadAction<AuthMethodType>) => {
      state.method = action.payload;
    },
    resetForm: (state) => {
      state.email = '';
      state.phone = '';
      state.password = '';
    },
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
