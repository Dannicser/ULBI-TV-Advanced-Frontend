import { UserRole } from "@/entities/User";
import { RouteProps } from "react-router-dom";

export type AppRouteProps = RouteProps & {
  authOnly: boolean;
  roles?: UserRole[];
};
