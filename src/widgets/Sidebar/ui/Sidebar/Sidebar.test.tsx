import { fireEvent, render, screen } from "@testing-library/react";

import { Sidebar } from "widgets/Sidebar/index";

import "@testing-library/jest-dom";

import { componentRender } from "shared/config/tests/renderWithRouter";

describe("Sidebar", () => {
  test("there is", () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId("sidebar"));
  });

  test("isCollapsed", () => {
    componentRender(<Sidebar />);
    const button = screen.getByTestId("sidebar-button"); // получаем кнопку

    fireEvent.click(button); // работа с событиями через fireEvent
    expect(screen.getByTestId("sidebar")).toHaveClass("isCollapsed");
  });
});
