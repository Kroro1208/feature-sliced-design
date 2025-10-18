import type { SupportedLanguagesType } from '@/shared/config/i18n/LanguageIconList';

import { languageIconList } from './i18n/LanguageIconList';
import { AppRoutes, routePaths } from './router/routePaths';
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
  type ThemeType,
} from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';

export {
  AppRoutes,
  languageIconList,
  LOCAL_STORAGE_THEME_KEY,
  routePaths,
  Theme,
  ThemeContext,
  useTheme,
  type SupportedLanguagesType,
  type ThemeType,
};
