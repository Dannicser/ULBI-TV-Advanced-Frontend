import { fireEvent, screen } from "@testing-library/react";

import { Sidebar } from "widgets/Sidebar/index";

import "@testing-library/jest-dom";

import { componentRender } from "shared/config/tests/renderWithRouter";

describe("Sidebar", () => {
  test("test", () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId("sidebar"));
  });

  test("test", () => {
    componentRender(<Sidebar />);
    const button = screen.getByTestId("sidebar-toggle"); // получаем кнопку
    fireEvent.click(button); // работа с событиями через fireEvent
    expect(screen.getByTestId("sidebar")).toHaveClass("isCollapsed");
  });
});
