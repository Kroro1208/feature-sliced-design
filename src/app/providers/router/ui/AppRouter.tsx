import { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { routeConfig } from '../routerConfig';

export const AppRouter = () => {
  return (
    <Routes>
      {routeConfig.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense key={path} fallback={<>Loading...</>}>
              {element}
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};
