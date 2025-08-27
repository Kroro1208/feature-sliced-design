import { routePaths, useTheme } from '@/shared/config';
import i18n from '@/shared/config/i18n/i18n';
import { Button } from '@/shared/ui';
import { useTranslation } from 'react-i18next';
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
      <Button onClick={toggleTheme}>{t('theme change')}</Button>
      <Button theme="outline" onClick={changeLanguage}>
        {i18n.language === 'en' ? 'ja' : '英語'}
      </Button>
      <Link to={routePaths.login}>{t('go to login')}</Link>
    </>
  );
};

export default HomePage;
