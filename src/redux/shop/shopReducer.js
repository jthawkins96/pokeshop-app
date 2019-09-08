import shopActionTypes from './shopActionTypes';

const initialState = {
    products: null
}

const shopReducer = (state = initialState, action) => {
    if(action.type === shopActionTypes.GET_PRODUCTS) {
        return {
            ...state,
            products: action.payload
        }
    }

    return state;
}

export default shopReducer;