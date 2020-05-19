import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { auth } from 'firebase/firebase.utils';

import { ReactComponent as Logo } from 'assets/images/icons/logo.svg';

import routes from 'constants/routes';

import './Header.scss';

const Header = ({ currentUser }) => {
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
        >
          Shop
        </NavLink>
        

        {currentUser ?
          <div
            className='nav__item'
            onClick={() => auth.signOut()}
          >
            Sign Out
          </div>
        :
          <NavLink
            className='nav__item'
            to={routes.auth.route}
            exact
          >
           Sign In
          </NavLink>}
      </nav>
    </header>
  );
}

export default Header;
