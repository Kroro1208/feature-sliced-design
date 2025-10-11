import { Footer } from '@/widgets/Footer';
import { HeaderPage } from '@/widgets/Header';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.pageWrapper}>
      <HeaderPage />
      <Footer />
    </div>
  );
};

export default HomePage;
