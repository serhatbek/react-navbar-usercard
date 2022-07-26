import { NavLink } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <NavLink className='logo' to='/'>
          <h1>Logo</h1>
        </NavLink>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
