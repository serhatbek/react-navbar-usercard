import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
  return (
    <>
      <h2>Login</h2>
      <Outlet />
    </>
  );
};

export default LoginLayout;
