import { createContext, useContext } from "react";

export enum Theme {
  LIGHT = "normal",
  DARK = "dark",
}

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export const LOCAL_STORAGE_THEME_KEY = "theme";

export const useThemeContext = () => {
  const theme = useContext(ThemeContext)

  if (!theme) {
    throw new Error('Can`t use useThemeContext outside of the ThemeProvider')
  }

  return theme
}
