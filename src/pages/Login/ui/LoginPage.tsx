import { routePaths } from '@/shared/config';
import { Link } from 'react-router';

const LoginPage = () => {
  return (
    <>
      <div>Login Page</div>
      <Link to={routePaths.home}>Go to Home</Link>
    </>
  );
};

export default LoginPage;
