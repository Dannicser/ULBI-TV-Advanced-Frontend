import { fireEvent, render, screen } from "@testing-library/react";

import { Sidebar } from "widgets/Sidebar/index";

import "@testing-library/jest-dom";

describe("Sidebar", () => {
  test("test", () => {
    render(<Sidebar />);
    expect(screen.getByTestId("sidebar"));
  });

  test("test", () => {
    render(<Sidebar />);
    const button = screen.getByTestId("sidebar-toggle"); // получаем кнопку
    fireEvent.click(button); // работа с событиями через fireEvent
    expect(screen.getByTestId("sidebar")).toHaveClass("isCollapsed");
  });
});
