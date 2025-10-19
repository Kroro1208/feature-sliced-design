export const AuthProviders = {
  LOCAL: 'LOCAL',
  GOOGLE: 'GOOGLE',
} as const;

type AuthProvidersKey = keyof typeof AuthProviders;
export type AuthProviderType = (typeof AuthProviders)[AuthProvidersKey];

export const AuthMethod = {
  EMAIL: 'email',
  PHONE: 'phone',
} as const;

type AuthMethodKeys = keyof typeof AuthMethod;
export type AuthMethodType = (typeof AuthMethod)[AuthMethodKeys];

export const LOCAL_STORAGE_USER_KEY = 'user';
