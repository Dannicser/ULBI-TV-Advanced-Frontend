import { Suspense } from "react";

import { Route, Routes } from "react-router-dom";

import { useTheme } from "../theme/hooks/useTheme";

import { Header } from "../components/Header/Header";

import { MainPageAsync } from "../page/MainPage/MainPage.async";
import { AboutPageAsync } from "../page/AboutPage/AboutPage.async";

import "../style/index.scss";

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
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
