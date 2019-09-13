import { all, call } from 'redux-saga/effects';
import { getShopProducts } from './shop/shopSagas';
import userSagas from './user/userSagas';

function* rootSaga() {
    yield all([call(getShopProducts), call(userSagas)])
}

export default rootSaga;

