import { routePaths } from '@/shared/config';
import { Link } from 'react-router';

const HomePage = () => {
  return (
    <>
      <div>Home Page</div>
      <Link to={routePaths.login}>Go to Login</Link>
    </>
  );
};

export default HomePage;
