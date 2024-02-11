import { AboutPageAsync } from "Pages/AboutPage";
import { MainPageAsync } from "Pages/MainPage";
import { NotFoundPage } from "Pages/NotFoundPage";
import { ArticleDetailPageAsync } from "pages/ArticleDetailsPage/ui/ArticleDetailPage.async";
import { ArticlesPageAsync } from "pages/ArticlesPage";
import { ProfilePageAsync } from "pages/ProfilePage";
import { RouteProps } from "react-router-dom";

// расширяемся от пропсов библиотеки
export type AppRouteProps = RouteProps & {
  authOnly: boolean;
};

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  ARTICLES = "articles",
  ACTICLE_DETAIL = "acticle_details",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile",
  [AppRoutes.ARTICLES]: "/articles",
  [AppRoutes.ACTICLE_DETAIL]: "/articles/", // +id
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
    path: RoutePath.profile,
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
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
    authOnly: false,
  },
};
