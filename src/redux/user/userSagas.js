import { takeLatest, call, put } from 'redux-saga/effects';
import { signInWithGoogle, createUserDocument } from '../../firebase/firebase.utils';
import userActionTypes from './userActionTypes';
import { setCurrentUser, googleSignInFailed } from './userActions';

function* googleSignInAsync() {
    try {
        const user = yield call(signInWithGoogle)
        yield call(createUserDocument, user)
        yield put(setCurrentUser(user))
    }
    catch(e) {
        console.log(e.message)
        yield put(googleSignInFailed(e.message))
    }
}

export function* onGoogleSignIn() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, googleSignInAsync)
}

function emailSignInAsync() {
    try {

    }
    catch(e) {

    }
}

function* onEmailSignIn() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, emailSignInAsync)
}