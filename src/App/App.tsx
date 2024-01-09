import { Suspense } from "react";

import { AppRouter } from "./router";

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";

import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

import "./style/index.scss";

export const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={"translating..."}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
