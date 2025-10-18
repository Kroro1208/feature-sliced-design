export const AppRoutes = {
  HOME: 'home',
  LOGIN: 'login',
  NOT_FOUND: 'notfound',
} as const;

type AppRouteKeys = keyof typeof AppRoutes;
type AppRoutes = (typeof AppRoutes)[AppRouteKeys];

// 各pageコンポーネントのLinkでto={routePaths.login}のように使用できる
export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.NOT_FOUND]: '*',
};
