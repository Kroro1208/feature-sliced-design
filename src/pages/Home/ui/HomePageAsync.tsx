import { lazy } from 'react';

// ページが実際に必要になった時だけ読み込まれる設定にしておく
export const HomePageAsync = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return import('./HomePage');
});
