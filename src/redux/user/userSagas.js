import { takeLatest, call } from 'redux-saga/effects';
import { signInWithGoogle } from '../../firebase/firebase.utils';

function* googleSignInAsync() {
    try {
        yield call(signInWithGoogle())
    }
    catch(e) {
        
    }
}

function* onGoogleSignIn() {
    yield takeLatest('GOOGLE_SIGN_IN_START', googleSignInAsync)
}

function emailSignInAsync() {
    try {

    }
    catch(e) {

    }
}

function* onEmailSignIn() {
    yield takeLatest('GOOGLE_SIGN_IN_START', emailSignInAsync)
}