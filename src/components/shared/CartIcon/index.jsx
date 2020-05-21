import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleCartVisible } from 'redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from 'assets/images/icons/shopping-bag.svg';

import './CartIcon.scss';

const IconCart = ({ toggleCartVisibleF }) => (
  <button type="button" className="cart-icon" onClick={toggleCartVisibleF}>
    <ShoppingIcon className="cart-icon__icon" />
    <span className="cart-icon__count">0</span>
  </button>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisibleF: () => dispatch(toggleCartVisible()),
});

IconCart.propTypes = {
  toggleCartVisibleF: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(IconCart);
