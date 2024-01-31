import { render } from "react-dom";

import { BrowserRouter } from "react-router-dom";

import { App } from "./app/App";

import { StoreProvider } from "app/providers/StoreProvider";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { ThemeProvider } from "app/providers/ThemeProvider";

import "./app/style/index.scss";

import "shared/config/i18n/i18n"; // обязательный импорт для работы i18n

render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

//BrowserRouter - выше
