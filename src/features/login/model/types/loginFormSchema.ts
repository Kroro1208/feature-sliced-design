import type { AuthMethodType } from '@/shared/config/auth/auth';

export interface LoginFormSchema {
  email?: string;
  phone?: string;
  password?: string;
  isLoading: boolean;
  error?: string;
  method: AuthMethodType;
}
