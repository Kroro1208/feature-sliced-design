import type { SupportedLanguagesType } from '@/shared/config/i18n/LanguageIconList';

import {
  AuthProviders,
  LOCAL_STORAGE_USER_KEY,
  type AuthMethodType,
  type AuthProviderType,
} from './auth/auth';
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
  AuthProviders,
  languageIconList,
  LOCAL_STORAGE_THEME_KEY,
  LOCAL_STORAGE_USER_KEY,
  routePaths,
  Theme,
  ThemeContext,
  useTheme,
  type AuthMethodType,
  type AuthProviderType,
  type SupportedLanguagesType,
  type ThemeType,
};
