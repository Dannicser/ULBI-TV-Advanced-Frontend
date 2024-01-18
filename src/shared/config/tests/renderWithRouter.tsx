import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";

interface IrenderWithRouterProps {
  route?: string;
}

export function renderWithRouter(compotent: ReactNode, options: IrenderWithRouterProps = {}) {
  const { route = "/" } = options;

  return render(<MemoryRouter initialEntries={[route]}>{compotent}</MemoryRouter>);
}

//решает проблему импортов элементов в реакт роутера при юнит тестировании, делал похожую функцию в сторибуке, чтобы испортировать
