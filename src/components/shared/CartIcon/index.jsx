import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleCartVisible } from 'redux/cart/cart.actions';
import { selectCartItemsCount } from 'redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from 'assets/images/icons/shopping-bag.svg';

import './CartIcon.scss';

const IconCart = ({ toggleCartVisibleF, itemCount }) => (
  <button type="button" className="cart-icon" onClick={toggleCartVisibleF}>
    <ShoppingIcon className="cart-icon__icon" />
    <span className="cart-icon__count">{itemCount}</span>
  </button>
);

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisibleF: () => dispatch(toggleCartVisible()),
});

IconCart.propTypes = {
  toggleCartVisibleF: PropTypes.func.isRequired,
  itemCount: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(IconCart);
