import { routePaths } from '@/shared/config';
import { Footer } from '@/widgets/Footer';
import { HeaderPage } from '@/widgets/Header';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import styles from './HomePage.module.scss';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.pageWrapper}>
      <HeaderPage />
      <main className={styles.content}>
        <Link to={routePaths.login}>{t('go to login')}</Link>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
