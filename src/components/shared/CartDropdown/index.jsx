import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cx from 'classnames';

import './CartDropdown.scss';

import Button from 'components/shared/Button';

const CartDropdown = ({ visible }) => (
  <div className={cx('cart-dropdown', {
    'visible': visible,
  })}
  >
    <ul className="cart-dropdown__items" />
    <Button>GO TO CHECKOUT</Button>
  </div>
);

const mapStateToProps = ({ cart }) => ({
  visible: cart.visible,
});

CartDropdown.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(CartDropdown);
