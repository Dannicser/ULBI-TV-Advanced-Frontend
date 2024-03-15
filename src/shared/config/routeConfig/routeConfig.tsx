import { AboutPageAsync } from "pages/AboutPage";
import { MainPageAsync } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { UserRole } from "entities/User";
import { AdminPanelPageAsync } from "pages/AdminPanelPage";
import { ArticleDetailPageAsync } from "pages/ArticleDetailsPage";
import { ArticleEditPageAsync } from "pages/ArticleEditPage";
import { ArticlesPageAsync } from "pages/ArticlesPage";
import { ForbiddenPage } from "pages/ForbiddenPage";
import { ProfilePageAsync } from "pages/ProfilePage";
import { RouteProps } from "react-router-dom";

// расширяемся от пропсов библиотеки
export type AppRouteProps = RouteProps & {
  authOnly: boolean;
  roles?: UserRole[];
};

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  ARTICLES = "articles",
  ACTICLE_CREATE = "acticle_create",
  ARTICLE_EDIT = "acticle_edit",
  ACTICLE_DETAIL = "acticle_details",
  ADMIN_PANEL = "admin_panel",
  FORBIDDEN = "forbidden",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile/", // +id
  [AppRoutes.ARTICLES]: "/articles",
  [AppRoutes.ACTICLE_DETAIL]: "/articles/", // +id
  [AppRoutes.ACTICLE_CREATE]: "/articles/new",
  [AppRoutes.ARTICLE_EDIT]: "/articles/:id/edit", // +id
  [AppRoutes.ADMIN_PANEL]: "/admin",
  [AppRoutes.FORBIDDEN]: "/forbidden",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPageAsync />,
    authOnly: false,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPageAsync />,
    authOnly: false,
  },
  [AppRoutes.PROFILE]: {
    path: `${RoutePath.profile}:id`,
    element: <ProfilePageAsync />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlesPageAsync />,
    authOnly: true,
  },
  [AppRoutes.ACTICLE_DETAIL]: {
    path: `${RoutePath.acticle_details}:id`,
    element: <ArticleDetailPageAsync />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: `${RoutePath.acticle_edit}`,
    element: <ArticleEditPageAsync />,
    authOnly: true,
  },
  [AppRoutes.ACTICLE_CREATE]: {
    path: `${RoutePath.acticle_create}`,
    element: <ArticleEditPageAsync />,
    authOnly: true,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: `${RoutePath.admin_panel}`,
    element: <AdminPanelPageAsync />,
    authOnly: true,
    roles: [UserRole.ADMIN, UserRole.MANAGER],
  },
  [AppRoutes.FORBIDDEN]: {
    path: `${RoutePath.forbidden}`,
    element: <ForbiddenPage />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
    authOnly: false,
  },
};
