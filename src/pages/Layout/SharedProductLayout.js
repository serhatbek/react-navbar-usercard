import { Outlet } from 'react-router-dom';
import './Layout.scss';

const SharedProductLayout = () => {
  return (
    <>
      <h2 className='heading'>Products</h2>
      <Outlet />
    </>
  );
};

export default SharedProductLayout;
