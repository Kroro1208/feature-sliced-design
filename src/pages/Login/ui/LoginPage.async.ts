import { lazy } from 'react';

export const LoginPageAsync = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return import('./LoginPage');
});
