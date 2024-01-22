import { Suspense } from "react";

import { AppRouter } from "./router";

import { classNames } from "shared/lib/classNames/classNames";

import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

export const App: React.FC = () => {
  return (
    <div className={classNames("app", {}, [])}>
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
