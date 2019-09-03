import cartActionTypes from './cartActionTypes';

export const toggleCart = () => ({type: cartActionTypes.TOGGLE_CART})
export const addItemToCart = item => ({type: cartActionTypes.ADD_ITEM_TO_CART, payload: item})
export const removeItemFromCart = item => ({type: cartActionTypes.REMOVE_ITEM_FROM_CART, payload: item})
export const addToItemQuantity = item => ({type: cartActionTypes.ADD_TO_ITEM_QUANTITY, payload: item})
export const removeFromItemQuantity = item => ({type: cartActionTypes.REMOVE_FROM_ITEM_QUANTITY, payload: item})