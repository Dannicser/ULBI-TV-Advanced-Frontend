import { Suspense } from "react";

import { Route, Routes } from "react-router-dom";

import { routeConfig } from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => {
          return <Route key={path} element={element} path={path} />;
        })}
      </Routes>
    </Suspense>
  );
};
