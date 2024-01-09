import { AppRouter } from "./router";

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";

import { Navbar } from "widgets/Navbar";

import "./style/index.scss";
import { Sidebar } from "widgets/Sidebar";

export const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};
