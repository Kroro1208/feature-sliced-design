import type { FunctionComponent, SVGProps } from 'react';
import { GiEarthAmerica as AmericaIcon } from 'react-icons/gi';
import { PiOnigiri as JapanIcon } from 'react-icons/pi';
import type { supportedLngs } from './i18n';

export type SupportedLanguagesType = (typeof supportedLngs)[number];

export type LanguageIconListType = Record<
  SupportedLanguagesType,
  FunctionComponent<SVGProps<SVGSVGElement>>
>;

export const languageIconList: LanguageIconListType = {
  en: AmericaIcon,
  ja: JapanIcon,
};
