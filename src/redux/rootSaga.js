import { all, call } from 'redux-saga/effects';
import { getShopProducts } from './shop/shopSagas';
import { onGoogleSignIn, onEmailSignIn } from './user/userSagas';

function* rootSaga() {
    yield all([call(getShopProducts), call(onGoogleSignIn), call(onEmailSignIn)])
}

export default rootSaga;

