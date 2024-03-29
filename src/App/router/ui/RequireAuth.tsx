import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getAuthData } from "@/entities/User";
import { getUserRoles } from "@/entities/User/";
import { UserRole } from "@/entities/User";
import { useLocation, Navigate } from "react-router-dom";
import { getRouteMain, getRouteNotFound } from "../config/routeConfig";

interface IRequireAuth {
  children: JSX.Element;
  roles?: UserRole[];
}

export const RequireAuth: React.FC<IRequireAuth> = ({ children, roles }) => {
  const userRoles = useSelector(getUserRoles);
  const auth = useSelector(getAuthData);
  let location = useLocation();

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((requiredRole) => {
      const hasRole = userRoles?.includes(requiredRole);

      return hasRole;
    });
  }, [roles]);

  if (!hasRequiredRoles) {
    return <Navigate to={getRouteNotFound()} state={{ from: location }} replace />;
  }

  if (!auth) {
    return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
  }

  return children;
};
