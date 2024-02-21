import { Suspense, useCallback } from "react";

import { Route, Routes } from "react-router-dom";

import { PageLoader } from "widgets/PageLoader";

import { AppRouteProps, routeConfig } from "shared/config/routeConfig/routeConfig";
import { RequireAuth } from "./RequireAuth";

export const AppRouter: React.FC = () => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        <>{route.element}</>
      </Suspense>
    ); // отрисовываем компонент

    return <Route key={route.path} path={route.path} element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element} />; // проверяем авторизов или нет
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};
