import { all, call } from 'redux-saga/effects';
import { getShopProducts } from './shop/shopSagas';
import { onGoogleSignIn } from './user/userSagas';

function* rootSaga() {
    yield all([call(getShopProducts), call(onGoogleSignIn)])
}

export default rootSaga;

