import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { App } from "./app/App";

import { StoreProvider } from "@/app/providers/StoreProvider";
import { ErrorBoundary } from "@/app/providers/ErrorBoundary";
import { ThemeProvider } from "@/app/providers/ThemeProvider";

import "./app/style/index.scss";

import "@/shared/config/i18n/i18n"; // обязательный импорт для работы i18n

const container = document.getElementById("root");

if (!container) {
  throw Error("container has not been found");
}

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
);

//BrowserRouter - выше
