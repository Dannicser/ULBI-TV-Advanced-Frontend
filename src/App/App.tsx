import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";

import { AppRouter } from "./router";

import { classNames } from "shared/lib/classNames/classNames";

import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

import { userActions } from "entities/User";

export const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, []);

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
