import { getAuthData } from "entities/User";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useSelector(getAuthData);
  let location = useLocation();

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return children;
};
