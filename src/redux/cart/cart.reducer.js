import CartActionTypes from './cart.types';

const INITIAL_STATE = {
  visible: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.CART_TOGGLE_VISIBLE:
      return {
        ...state,
        visible: !state.visible,
      };
    default:
      return state;
  }
};

export default cartReducer;
