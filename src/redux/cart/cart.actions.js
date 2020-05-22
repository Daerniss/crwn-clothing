import CartActionTypes from './cart.types';

export const toggleCartVisible = () => ({
  type: CartActionTypes.CART_TOGGLE_VISIBLE,
});

export const cartAddItem = (item) => ({
  type: CartActionTypes.CART_ADD_ITEM,
  payload: item,
});
