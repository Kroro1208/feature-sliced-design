import type { AuthProviderType } from '@/shared/config';

export interface User {
  id: string;
  email?: string;
  inVerified?: boolean;
  provider: AuthProviderType;
}

export interface UserSchema {
  userData?: User;
}
