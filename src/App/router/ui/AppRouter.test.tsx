import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { AppRouter } from "./AppRouter";
import { getRouteAbout, getRouteAdmin, getRouteProfile } from "../config/routeConfig";

import { componentRender } from "@/shared/config/tests/renderWithRouter";
import { UserRole } from "@/entities/User";

describe("AppRouter", () => {
  test("render AboutPage", async () => {
    componentRender(<AppRouter />, { route: getRouteAbout() });

    const page = await screen.findByTestId("AboutPage"); // find для ассинхронщины

    expect(page).toBeInTheDocument();
  });

  test("render NotFoundPage", async () => {
    componentRender(<AppRouter />, { route: "/sdlfjsdf" });

    const page = await screen.findByTestId("NotFoundPage"); // find для ассинхронщины

    expect(page).toBeInTheDocument();
  });

  test("redirect unauthorized user to MainPage", async () => {
    componentRender(<AppRouter />, { route: getRouteProfile("1") });

    const page = await screen.findByTestId("MainPage"); // find для ассинхронщины

    expect(page).toBeInTheDocument();
  });

  test("authorized user visits ProfilePage", async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile("1"),
      initialState: {
        user: {
          authData: {
            id: "1",
            username: "dan",
          },
        },
      },
    });

    const page = await screen.findByTestId("ProfilePage"); // find для ассинхронщины

    expect(page).toBeInTheDocument();
  });

  test("admin visit AdminPanelPage", async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          authData: {
            id: "1",
            username: "dan",
            roles: [UserRole.ADMIN],
          },
        },
      },
    });

    const page = await screen.findByTestId("AdminPanelPage"); // find для ассинхронщины

    expect(page).toBeInTheDocument();
  });

  test("user visit AdminPanelPage", async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          authData: {
            id: "1",
            username: "dan",
            roles: [UserRole.USER],
          },
        },
      },
    });

    const page = await screen.findByTestId("ForbiddenPage"); // find для ассинхронщины

    expect(page).toBeInTheDocument();
  });
});
