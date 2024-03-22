import { createSelector } from "@reduxjs/toolkit";

import { getAuthData } from "@/entities/User";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";

import { SidebarItemType } from "../types/sidebar";

export const getSidebarItems = createSelector(getAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    { path: RoutePath.main, text: "Main", authOnly: false },
    { path: RoutePath.about, text: "About", authOnly: false },
  ];

  if (userData) {
    sidebarItemsList.push(
      { path: RoutePath.profile + userData?.id, text: "Profile", authOnly: true },
      { path: RoutePath.articles, text: "Articles", authOnly: true }
    );
  }

  return sidebarItemsList;
});
