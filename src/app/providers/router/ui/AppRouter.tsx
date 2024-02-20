import {
  memo, Suspense, useCallback,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '@/app/providers/router/config/routeConfig';
import { AppRouteProps } from '@/shared/types/router';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from './RequireAuth';

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const routeElement = (
      <Suspense fallback={<PageLoader />}>
        {route.element}
      </Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? (<RequireAuth roles={route.roles}>{routeElement}</RequireAuth>) : routeElement}
      />
    );
  }, []);

  return (
    <Routes>
      {Object.values(routeConfig).map(renderWithWrapper)}
    </Routes>
  );
});
