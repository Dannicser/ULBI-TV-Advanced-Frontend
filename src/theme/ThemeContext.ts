import { createContext } from "react";

import { IThemeContextProps } from "./types/theme";

export const ThemeContext = createContext<IThemeContextProps>({});
