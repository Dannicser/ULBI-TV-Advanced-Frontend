import { DeepPartial } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";

interface IrenderWithRouterProps {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

export function componentRender(compotent: ReactNode, options: IrenderWithRouterProps = {}) {
  const { route = "/", initialState } = options;

  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>{compotent}</MemoryRouter>
    </StoreProvider>
  );
}

//решает проблему импортов элементов в реакт роутера при юнит тестировании, делал похожую функцию в сторибуке, чтобы испортировать
