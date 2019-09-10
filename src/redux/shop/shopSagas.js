import shopActionTypes from './shopActionTypes';
import { getShopProductsSuccess } from './shopActions'
import { getShopProductsFailure } from './shopActions'
import { takeLatest, put, call } from 'redux-saga/effects';
import { getProducts, convertProductsArrayToMap } from '../../firebase/firebase.utils';

function* getShopProductsAsync() {
    try {
        let productsList = yield getProducts()
        let productMap = yield call(convertProductsArrayToMap, productsList)
        yield put(getShopProductsSuccess(productMap))
    }
    catch (error) {
        yield put(getShopProductsFailure(error.message))
    }
}

export function* getShopProducts() {
    yield takeLatest(shopActionTypes.GET_PRODUCTS, getShopProductsAsync)
}


