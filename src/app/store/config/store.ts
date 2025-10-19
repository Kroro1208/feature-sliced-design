import {
  configureStore,
  type ThunkDispatch,
  type UnknownAction,
} from '@reduxjs/toolkit';

import type { StateSchema } from './StateSchema';

import { userReducer } from '@/entities';
import { loginReducer } from '@/features';

export const createStore = (initialState?: StateSchema) => {
  return configureStore<StateSchema>({
    preloadedState: initialState,
    reducer: {
      user: userReducer,
      loginForm: loginReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true,
  });
};

export type AppDispatch = ThunkDispatch<StateSchema, unknown, UnknownAction>;
