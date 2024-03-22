import { fireEvent, screen } from "@testing-library/react";

import { Counter } from "./Counter";

import "@testing-library/jest-dom"; // !

import { componentRender } from "@/shared/config/tests/renderWithRouter";

// это интеграционный тест

describe("Counter", () => {
  test("1", () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
  });

  test("decrement", () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });

    const button = screen.getByTestId("dec-button"); // получаем кнопку
    fireEvent.click(button); // работа с событиями через fireEvent

    expect(screen.getByTestId("value-title")).toHaveTextContent("9");
  });

  test("increment", () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });

    const button = screen.getByTestId("inc-button"); // получаем кнопку
    fireEvent.click(button); // работа с событиями через fireEvent

    expect(screen.getByTestId("value-title")).toHaveTextContent("11");
  });
});
