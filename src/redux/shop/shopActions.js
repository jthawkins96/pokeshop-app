import React from 'react';
import shopActionTypes from './shopActionTypes';
import { getProducts } from '../../firebase/firebase.utils';
import Product from '../../components/product/product';

export const getShopProductsAsync = () => {
    return async dispatch => {
        let productsList = await getProducts()
        let productMap = {}

        productsList.forEach(p => {
            const product = <Product key={p.id} {...p} />
            if (p.type in productMap)
                productMap[p.type].push(product)
            else
                productMap[p.type] = [product]
        });

        dispatch(getShopProducts(productMap))
    }
}

export const getShopProducts = products => ({ type: shopActionTypes.GET_PRODUCTS, payload: products })


