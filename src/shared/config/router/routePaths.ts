export const AppRoutes = {
  HOME: 'home',
  LOGIN: 'login',
  NOT_FOUND: 'notfound',
} as const;

type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes];

// 各pageコンポーネントのLinkでto={routePaths.login}のように使用できる
export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.NOT_FOUND]: '*',
};
