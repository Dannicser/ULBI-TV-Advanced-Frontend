import { Suspense } from "react";

import { Route, Routes } from "react-router-dom";

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";

import { MainPageAsync } from "page/MainPage";
import { AboutPageAsync } from "page/AboutPage";

import { Header } from "widgets/Header/Header";

import "./style/index.scss";

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Header />
      <button onClick={toggleTheme}>Изменить тему</button>
      <Suspense fallback={<div>...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>{" "}
      </Suspense>
    </div>
  );
};
