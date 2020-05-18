import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Header.scss';

import routes from 'constants/routes';
import { ReactComponent as Logo } from 'assets/images/icons/logo.svg';

const Header = () => {
  return(
    <header className='header'>
      <Link className='header__logo-container' to={routes.home.route}>
        <Logo className='header__logo' />
      </Link>
      <nav className='header-nav nav'>
        <NavLink
          className='nav__item'
          to={routes.home.route}
          exact
         >
          Home
         </NavLink>
        <NavLink
          className='nav__item'
          to={routes.shop.route}
          // exact
        >
          Shop
        </NavLink>
        <NavLink
          className='nav__item'
          to={routes.auth.route}
          exact
        >
          SignIn
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
