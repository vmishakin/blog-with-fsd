import { createContext } from 'react';

export enum Theme {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme',
  MAGNETA = 'app_magneta_theme'
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';

// export const useThemeContext = () => {
//   const theme = useContext(ThemeContext);

//   // if (!theme) {
//   //   throw new Error('Can`t use useThemeContext outside of the ThemeProvider');
//   // }

//   return theme;
// };
