import { Theme } from "../consts/consts";

export interface IThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}
