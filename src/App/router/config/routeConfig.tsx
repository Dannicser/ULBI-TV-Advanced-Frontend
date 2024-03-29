import { AboutPageAsync } from "@/pages/AboutPage";
import { MainPageAsync } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { AdminPanelPageAsync } from "@/pages/AdminPanelPage";
import { ArticleDetailPageAsync } from "@/pages/ArticleDetailsPage";
import { ArticleEditPageAsync } from "@/pages/ArticleEditPage";
import { ArticlesPageAsync } from "@/pages/ArticlesPage";
import { ForbiddenPage } from "@/pages/ForbiddenPage";
import { ProfilePageAsync } from "@/pages/ProfilePage";

import { UserRole } from "@/entities/User";

import { AppRoutes } from "@/shared/const/router";
import { AppRouteProps } from "@/shared/types/router";

export const getRouteMain = () => "/";
export const getRouteAbout = () => "/about";
export const getRouteProfile = (id: string) => "/profile/" + id;
export const getRouteArticles = () => "/articles";
export const getRouteArticleDetails = (id: string) => "/articles/" + id;
export const getRouteArticleCreate = () => "/articles/new";
export const getRouteArticleEdit = (id: string) => "/articles/" + id + "/edit";
export const getRouteAdmin = () => "/admin";
export const getRouteForbidden = () => "/forbidden";
export const getRouteNotFound = () => "*";

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPageAsync />,
    authOnly: false,
  },
  [AppRoutes.ABOUT]: {
    path: getRouteAbout(),
    element: <AboutPageAsync />,
    authOnly: false,
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(":id"),
    element: <ProfilePageAsync />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: getRouteArticles(),
    element: <ArticlesPageAsync />,
    authOnly: true,
  },
  [AppRoutes.ACTICLE_DETAIL]: {
    path: getRouteArticleDetails(":id"),
    element: <ArticleDetailPageAsync />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: getRouteArticleEdit(":id"),
    element: <ArticleEditPageAsync />,
    authOnly: true,
  },
  [AppRoutes.ACTICLE_CREATE]: {
    path: getRouteArticleCreate(),
    element: <ArticleEditPageAsync />,
    authOnly: true,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: getRouteAdmin(),
    element: <AdminPanelPageAsync />,
    authOnly: true,
    roles: [UserRole.ADMIN, UserRole.MANAGER],
  },
  [AppRoutes.FORBIDDEN]: {
    path: getRouteForbidden(),
    element: <ForbiddenPage />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: getRouteNotFound(),
    element: <NotFoundPage />,
    authOnly: false,
  },
};
