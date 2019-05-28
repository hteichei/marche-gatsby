export const calculateTotal = cart =>
  cart.reduce((acc, next) => acc + next.variant.price * next.quantity, 0)
