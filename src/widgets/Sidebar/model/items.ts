import { RoutePath } from "shared/config/routeConfig/routeConfig";

export interface SidebarItemType {
  path: string;
  text: string;
}

export const SidebarItemsList: SidebarItemType[] = [
  { path: RoutePath.main, text: "Main" },
  { path: RoutePath.about, text: "About" },
  { path: RoutePath.profile, text: "Profile" },
];
