import { DeepPartial } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { ReactNode, Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";

import i18nForTests from "../i18n/i18nForTest";

interface IrenderWithRouterProps {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

export function componentRender(compotent: ReactNode, options: IrenderWithRouterProps = {}) {
  const { route = "/", initialState = {} } = options;

  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTests}>{compotent}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  );
}

//решает проблему импортов элементов в реакт роутера при юнит тестировании, делал похожую функцию в сторибуке, чтобы испортировать
