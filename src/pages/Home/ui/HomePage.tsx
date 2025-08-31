import { routePaths, useTheme } from '@/shared/config';
import i18n from '@/shared/config/i18n/i18n';
import { AppIcon, Button, Input } from '@/shared/ui';
import { useTranslation } from 'react-i18next';
import { GiJapan } from 'react-icons/gi';
import { IoSearch } from 'react-icons/io5';
import { LiaFlagUsaSolid } from 'react-icons/lia';
import { Link } from 'react-router';
import styles from './HomePage.module.scss';

const HomePage = () => {
  const { toggleTheme } = useTheme();
  const { t } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ja' : 'en');
  };

  return (
    <>
      <h1 className={styles.title}>{t('hello')}</h1>

      <Input
        placeholder={t('search')}
        Icon={<AppIcon Icon={IoSearch} theme="background" />}
      />
      <Button onClick={toggleTheme}>{t('theme change')}</Button>
      <Button theme="outline" onClick={changeLanguage}>
        {i18n.language === 'en' ? <GiJapan /> : <LiaFlagUsaSolid />}
      </Button>
      <Link to={routePaths.login}>{t('go to login')}</Link>
    </>
  );
};

export default HomePage;
