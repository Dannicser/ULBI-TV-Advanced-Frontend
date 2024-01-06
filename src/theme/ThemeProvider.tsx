import { useMemo, useState } from "react";

import { ThemeContext } from "./ThemeContext";

import { LOCAL_STORAGE_THEME_KEY, Theme } from "./types/theme";

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => {
    return {
      theme,
      setTheme,
    };
  }, [theme]);

  // мы передаем сюда объект, который будет инициализироваться заново на каждый рендер компонента, поэтому memo
  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

// провайдер - это компонент, который возвращает контекст с детьми внутри
