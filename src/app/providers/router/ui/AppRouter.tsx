import { Routes, Route } from 'react-router';
import { routeConfig } from '../routerConfig';

export const AppRouter = () => {
  return (
    <Routes>
      {routeConfig.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};
