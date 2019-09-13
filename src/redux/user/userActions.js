import userActionTypes from './userActionTypes'

export const setCurrentUser = user => ({type: userActionTypes.SET_CURRENT_USER, payload:user})

export const startGoogleSignIn = () => ({ type: userActionTypes.GOOGLE_SIGN_IN_START })

export const startEmailSignIn = (username, password) => ({ type: userActionTypes.EMAIL_SIGN_IN_START, payload: { username, password } })

export const signInFailed = hasError => ({ type: userActionTypes.SIGN_IN_FAILURE, payload: hasError })

export const signOut = () => ({ type: userActionTypes.SIGN_OUT })
