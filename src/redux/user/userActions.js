import userActionTypes from './userActionTypes'

export const setCurrentUser = user => ({type: userActionTypes.SET_CURRENT_USER, payload:user})

export const googleSignInFailed = errorMessage => ({ type: userActionTypes.GOOGLE_SIGN_IN_FAILURE, payload: errorMessage })

export const startGoogleSignIn = () => ({ type: userActionTypes.GOOGLE_SIGN_IN_START })