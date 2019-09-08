import { createSelector } from 'reselect';

const shopSelector = state => state.shop

export const productsSelector = createSelector(
    [shopSelector],
    shop => shop.products
)