import type { StateSchema } from '@/app/store';

import { AuthMethod } from '@/shared/config/auth/auth';

export const selectLoginMethod = (state: StateSchema) =>
  state.loginForm?.method ?? AuthMethod.EMAIL;
