import userActionTypes from './userActionTypes'

const initialState = {
    currentUser: null,
    errorMessage: null,
}

const userReducer = (state=initialState, action) => {
    if(action.type === userActionTypes.SET_CURRENT_USER) {
        console.log(action.payload)
        return {
            ...state,
            currentUser: action.payload,
            errorMessage: null
        }
    }
    else if(action.type === userActionTypes.GOOGLE_SIGN_IN_FAILURE || action.type === userActionTypes.EMAIL_SIGN_IN_FAILURE) {
        return {
            ...state,
            errorMessage: action.payload
        }
    }
    else
        return state
}

export default userReducer;