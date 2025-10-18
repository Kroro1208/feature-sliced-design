import { Link } from 'react-router';

import { routePaths } from '@/shared/config';

const LoginPage = () => {
  return (
    <>
      <div>Login Page</div>
      <Link to={routePaths.home}>Go to Home</Link>
    </>
  );
};

export default LoginPage;
