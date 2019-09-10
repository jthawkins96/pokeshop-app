import { all, call } from 'redux-saga/effects';
import { getShopProducts } from './shop/shopSagas';

function* rootSaga() {
    yield all([call(getShopProducts)])
}

export default rootSaga;

