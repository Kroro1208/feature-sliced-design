import { HomePage } from '@/pages/Home';
import { LoginPage } from '@/pages/Login';
import NotFoundPage from '@/pages/NotFound/ui/NotFoundPage';
import { AppRoutes, routePaths } from '@/shared/config';
import type { RouteProps } from 'react-router';

export const routeConfig: RouteProps[] = [
  {
    path: routePaths[AppRoutes.HOME],
    element: <HomePage />,
  },
  {
    path: routePaths[AppRoutes.LOGIN],
    element: <LoginPage />,
  },
  {
    path: routePaths[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
];
