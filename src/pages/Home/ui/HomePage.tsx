import { routePaths, useTheme } from '@/shared/config';
import { Link } from 'react-router';
import styles from './HomePage.module.scss';

const HomePage = () => {
  const { toggleTheme } = useTheme();
  return (
    <>
      <h1 className={styles.title}>Home Page</h1>
      <button onClick={toggleTheme}>theme change</button>
      <Link to={routePaths.login}>Go to Login</Link>
    </>
  );
};

export default HomePage;
