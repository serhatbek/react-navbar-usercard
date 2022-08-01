import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

const LoginLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default LoginLayout;
