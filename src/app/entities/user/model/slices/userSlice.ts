import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { User, UserSchema } from '../types/UserSchema';

const initialState: UserSchema = {
  userData: undefined,
};

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      state.userData = action.payload;
    },
    createUserData: (state) => {
      state.userData = undefined;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
