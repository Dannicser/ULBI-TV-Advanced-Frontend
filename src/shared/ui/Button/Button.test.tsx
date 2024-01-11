import { render, screen } from "@testing-library/react";

import { Button } from "./Button";

import "@testing-library/jest-dom"; // !

describe("Button", () => {
  test("role", () => {
    render(<Button>Test</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("text", () => {
    render(<Button>Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
