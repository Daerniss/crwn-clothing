import React from 'react';
import PropTypes from 'prop-types';

import './CartItem.scss';

const CartItem = ({
  item: {
    imageUrl, price, name, quantity,
  },
}) => (
  <div className="cart-item">
    <img className="cart-item__img" src={imageUrl} alt={name} />
    <div className="cart-item__details">
      <span className="cart-item__name">{name}</span>
      <span className="cart-item__price">
        {quantity}
        {' '}
        x $
        {price}
      </span>
    </div>
  </div>
);

CartItem.propTypes = {
  item: PropTypes.shape({
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    name: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
};

export default CartItem;
