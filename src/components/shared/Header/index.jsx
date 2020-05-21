import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import { auth } from 'firebase/firebase.utils';

import { ReactComponent as Logo } from 'assets/images/icons/logo.svg';

import routes from 'constants/routes';

import CartIcon from 'components/shared/CartIcon';
import CartDropdown from 'components/shared/CartDropdown';

import './Header.scss';

const Header = ({ currentUser }) => (
  <header className="header">
    <Link className="header__logo-container" to={routes.home.route}>
      <Logo className="header__logo" />
    </Link>
    <nav className="header-nav nav">
      <NavLink
        className="nav__item"
        to={routes.home.route}
        exact
      >
        Home
      </NavLink>
      <NavLink
        className="nav__item"
        to={routes.shop.route}
      >
        Shop
      </NavLink>
      {currentUser
        ? (
          <button
            type="button"
            className="nav__item"
            onClick={() => auth.signOut()}
          >
            Sign Out
          </button>
        )
        : (
          <NavLink
            className="nav__item"
            to={routes.auth.route}
            exact
          >
            Sign In
          </NavLink>
        )}
      <CartIcon />
    </nav>
    <CartDropdown />
  </header>
);

Header.defaultProps = {
  currentUser: null,
};

Header.propTypes = {
  currentUser: PropTypes.shape({}),
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
