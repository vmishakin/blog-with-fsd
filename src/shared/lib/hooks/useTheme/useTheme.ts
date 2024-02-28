import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from '../../../constants/localstorage';
import { Theme } from '../../../constants/theme';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme;
    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT;
        break;
      case Theme.LIGHT:
        newTheme = Theme.MAGNETA;
        break;
      case Theme.MAGNETA:
        newTheme = Theme.DARK;
        break;
      default:
        newTheme = Theme.MAGNETA;
    }
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme: theme ?? Theme.LIGHT,
    toggleTheme,
  };
}
