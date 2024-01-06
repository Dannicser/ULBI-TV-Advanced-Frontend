import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { LOCAL_STORAGE_THEME_KEY, Theme } from "../types/theme";

interface IUseTheme {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): IUseTheme => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };

  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);

  return { theme, toggleTheme };
};

// хук useTheme позволяет избавиться от импорта контекста
