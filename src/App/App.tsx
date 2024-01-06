import { Suspense } from "react";

import { Route, Routes } from "react-router-dom";

import { Header } from "../components/Header/Header";

import { MainPageAsync } from "../page/MainPage/MainPage.async";
import { AboutPageAsync } from "../page/AboutPage/AboutPage.async";

import "../style/index.scss";

export const App: React.FC = () => {
  return (
    <div className="app">
      <Header />{" "}
      <Suspense fallback={<div>...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>{" "}
      </Suspense>
    </div>
  );
};
