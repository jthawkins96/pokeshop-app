import { takeLatest, call, put } from 'redux-saga/effects';
import { signInWithGoogle, createUserDocument, signInWithEmail } from '../../firebase/firebase.utils';
import userActionTypes from './userActionTypes';
import { setCurrentUser, signInFailed } from './userActions';

function* googleSignInAsync() {
    try {
        const user = yield call(signInWithGoogle)
        yield call(createUserDocument, user)
        yield put(setCurrentUser(user))
    }
    catch(e) {
        yield put(signInFailed(e.message))
    }
}

export function* onGoogleSignIn() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, googleSignInAsync)
}

function* emailSignInAsync(action) {
    try {
        const user = yield call(signInWithEmail(action.payload.username, action.payload.password))
        yield put(setCurrentUser(user))
    }
    catch(e) {
        console.log(e.message)
        yield put(signInFailed(true))
    }
}

export function* onEmailSignIn() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, emailSignInAsync)
}

export function* signOutAsync() {
    try {

    }
    catch(e) {
        
    }
}

export function* onSignOut() {
    yield takeLatest(userActionTypes.SIGN_OUT, signOutAsync)
}