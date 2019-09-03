import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectShowCart = createSelector(
    [selectCart], 
    cart => cart.showCart
)

export const selectCartItems = createSelector(
    [selectCart], 
    cart => cart.cart
)

export const selectCartCount = createSelector(
    [selectCartItems],
    cart => cart.reduce((acc, item) => acc + item.count, 0)
)

export const selectTotalPrice = createSelector(
    [selectCartItems],
    cart => cart.reduce((acc, item) => acc + (item.count * item.price), 0)
)