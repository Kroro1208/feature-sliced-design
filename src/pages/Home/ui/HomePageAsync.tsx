import { lazy } from 'react';

export const HomePageAsync = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return import('./HomePage');
});
