import userActionTypes from './userActionTypes'

const initialState = {
    currentUser: null
}

const userReducer = (state=initialState, action) => {
    if(action.type === userActionTypes.SET_CURRENT_USER)
        return {
            ...state,
            currentUser: action.payload
        }
    else
        return state
}

export default userReducer;