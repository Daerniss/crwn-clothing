import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cx from 'classnames';

import './CartDropdown.scss';

import Button from 'components/shared/Button';
import CartItem from '../CartItem';

const CartDropdown = ({ visible, cartItems }) => (
  <div className={cx('cart-dropdown', {
    'visible': visible,
  })}
  >
    <ul className="cart-dropdown__items">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
    <Button>GO TO CHECKOUT</Button>
  </div>
);

const mapStateToProps = ({ cart }) => ({
  visible: cart.visible,
  cartItems: cart.cartItems,
});

CartDropdown.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(CartDropdown);
