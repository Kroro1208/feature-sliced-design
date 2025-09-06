import { routePaths } from '@/shared/config';
import { HeaderPage } from '@/widgets/Header';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import styles from './HomePage.module.scss';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeaderPage />
      <h1 className={styles.title}>{t('hello')}</h1>
      <Link to={routePaths.login}>{t('go to login')}</Link>
    </>
  );
};

export default HomePage;
