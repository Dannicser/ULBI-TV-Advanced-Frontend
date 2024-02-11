import { RoutePath } from "shared/config/routeConfig/routeConfig";

export interface SidebarItemType {
  path: string;
  text: string;
  authOnly: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  { path: RoutePath.main, text: "Main", authOnly: false },
  { path: RoutePath.about, text: "About", authOnly: false },
  { path: RoutePath.profile, text: "Profile", authOnly: true },
  { path: RoutePath.articles, text: "Articles", authOnly: true },
];
