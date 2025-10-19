export const AuthProviders = {
  LOCAL: 'LOCAL',
  GOOGLE: 'GOOGLE',
} as const;

type AuthProvidersKey = keyof typeof AuthProviders;
export type AuthProviderType = (typeof AuthProviders)[AuthProvidersKey];
