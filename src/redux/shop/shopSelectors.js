import { createSelector } from 'reselect';

const shopSelector = state => state.shop

export const selectProducts = createSelector(
    [shopSelector],
    shop => shop.products
)

export const selectRetrievingProducts = createSelector(
    [shopSelector],
    shop => shop.retrievingProducts
)