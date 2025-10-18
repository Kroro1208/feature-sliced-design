import { useTranslation } from 'react-i18next';

import { languageIconList } from '@/shared/config';
import type { SupportedLanguagesType } from '@/shared/config/i18n/LanguageIconList';
import { AppIcon, Button } from '@/shared/ui';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language as SupportedLanguagesType;

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ja' : 'en');
  };
  return (
    <div>
      <Button onClick={toggleLanguage} theme="ghost">
        <AppIcon Icon={languageIconList[currentLanguage]} size={48} />
      </Button>
    </div>
  );
};
