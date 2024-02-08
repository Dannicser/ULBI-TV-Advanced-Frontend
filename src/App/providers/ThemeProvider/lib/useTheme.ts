import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { LOCAL_STORAGE_THEME_KEY, Theme } from "../types/theme";

interface IUseTheme {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): IUseTheme => {
  const { theme = Theme.LIGHT, setTheme } = useContext(ThemeContext);

  let newTheme: Theme;

  switch (theme) {
    case Theme.DARK:
      newTheme = Theme.LIGHT;
      break;
    case Theme.LIGHT:
      newTheme = Theme.ORANGE;
      break;
    case Theme.ORANGE:
      newTheme = Theme.DARK;
      break;

    default:
      newTheme = Theme.LIGHT;
  }

  const toggleTheme = () => {
    setTheme?.(newTheme); // optional chaning operator for function!
  };

  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  document.body.className = theme;

  return { theme, toggleTheme };
};

// хук useTheme позволяет избавиться от импорта контекста
