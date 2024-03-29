import { createSelector } from "@reduxjs/toolkit";

import { getAuthData } from "@/entities/User";

import { SidebarItemType } from "../types/sidebar";
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from "@/app/router/config/routeConfig";

export const getSidebarItems = createSelector(getAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    { path: getRouteMain(), text: "Main", authOnly: false },
    { path: getRouteAbout(), text: "About", authOnly: false },
  ];

  if (userData) {
    sidebarItemsList.push(
      { path: getRouteProfile(userData.id), text: "Profile", authOnly: true },
      { path: getRouteArticles(), text: "Articles", authOnly: true }
    );
  }

  return sidebarItemsList;
});
