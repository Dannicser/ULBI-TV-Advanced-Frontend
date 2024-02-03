import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { LOCAL_STORAGE_THEME_KEY, Theme } from "../types/theme";

interface IUseTheme {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): IUseTheme => {
  const { theme = Theme.LIGHT, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme?.(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK); // optional chaning operator for function!
  };

  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  document.body.className = theme;

  return { theme, toggleTheme };
};

// хук useTheme позволяет избавиться от импорта контекста
