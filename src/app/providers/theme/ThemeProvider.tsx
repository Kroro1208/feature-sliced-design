import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
  type ThemeType,
} from '@/shared/config';
import { useEffect, useState, type ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

const defaultValue =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType) || 'pink-theme';

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>(defaultValue);

  useEffect(() => {
    document.body.className = `${theme}`;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
