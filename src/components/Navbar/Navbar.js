import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink
        to='/'
        className={({ isActive }) =>
          isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
        }
      >
        Home
      </NavLink>
      <NavLink
        to='/about'
        className={({ isActive }) =>
          isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
        }
      >
        About
      </NavLink>
      <NavLink
        to='/products'
        className={({ isActive }) =>
          isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
        }
      >
        Products
      </NavLink>
      <NavLink
        to='/contact'
        className={({ isActive }) =>
          isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
        }
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
