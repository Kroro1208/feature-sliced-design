import type { UserSchema } from '@/entities';
import type { LoginFormSchema } from '@/features';

export interface StateSchema {
  user: UserSchema;
  loginForm: LoginFormSchema;
}
