import shopActionTypes from './shopActionTypes';

export const getShopProducts = () => ({ type: shopActionTypes.GET_PRODUCTS })
export const getShopProductsSuccess = products => ({ type: shopActionTypes.GET_PRODUCTS_SUCCESS, payload: products })
export const getShopProductsFailure = errorMessage => ({ type: shopActionTypes.GET_PRODUCTS_FAILURE, payload: errorMessage })


