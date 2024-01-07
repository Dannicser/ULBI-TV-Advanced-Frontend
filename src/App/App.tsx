import { AppRouter } from "./router";

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";

import { Header } from "widgets/Header/Header";

import "./style/index.scss";

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Header />
      <AppRouter />
    </div>
  );
};
