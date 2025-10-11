import { Button } from '@/shared/ui';
import { Footer } from '@/widgets/Footer';
import { HeaderPage } from '@/widgets/Header';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './HomePage.module.scss';

const HomePage = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return (
    <div className={styles.pageWrapper}>
      <HeaderPage />
      <main className={styles.content}>
        <Button onClick={() => setError(true)}>{t('click')}</Button>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
