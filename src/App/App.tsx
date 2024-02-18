import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppRouter } from "./router";

import { classNames } from "shared/lib/classNames/classNames";

import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

import { getUserInited, userActions } from "entities/User";

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]); // ????????????????????????????///\

  return (
    <div className={classNames("app", {}, [])}>
      <Suspense fallback={"translating..."}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};
