export const addItemToCart = (cartItems, cartItemToAdd) => {
  const uniqueItem = cartItems.find((item) => item.id === cartItemToAdd.id);

  if (uniqueItem) {
    return cartItems.map((item) => (item.id === cartItemToAdd.id
      ? { ...item, quantity: item.quantity + 1 }
      : item));
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
