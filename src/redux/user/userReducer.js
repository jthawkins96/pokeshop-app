import userActionTypes from './userActionTypes'

const initialState = {
    currentUser: null,
    hasError: false,
}

const userReducer = (state=initialState, action) => {
    if(action.type === userActionTypes.SET_CURRENT_USER) {
        console.log(action.payload)
        return {
            ...state,
            currentUser: action.payload,
            hasError: false
        }
    }
    else if(action.type === userActionTypes.SIGN_IN_FAILURE) {
        return {
            ...state,
            hasError: action.payload
        }
    }
    else if(action.type === userActionTypes.SIGN_OUT) {
        return {
            ...state,
            ...initialState
        }
    }
    else
        return state
}

export default userReducer;