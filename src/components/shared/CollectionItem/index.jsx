import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { cartAddItem } from 'redux/cart/cart.actions';
import Button from 'components/shared/Button';

import './CollectionItem.scss';

const CollectionItem = ({ item, cartAddItemF }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        inverted
        onClick={() => cartAddItemF(item)}
      >
        Add to cart
      </Button>
    </div>
  );
};

CollectionItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    imageUrl: PropTypes.string,
  }).isRequired,
  cartAddItemF: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  cartAddItemF: (item) => dispatch(cartAddItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
