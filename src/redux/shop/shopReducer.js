import shopActionTypes from './shopActionTypes';

const initialState = {
    products: null,
    retrievingProducts: false,
    errorMessage: ""
}

const shopReducer = (state = initialState, action) => {
    if(action.type === shopActionTypes.GET_PRODUCTS) {
        return {
            ...state,
            retrievingProducts: true
        }
    }
    else if(action.type === shopActionTypes.GET_PRODUCTS_SUCCESS) {
        return {
            ...state,
            products: action.payload,
            retrievingProducts: false
        }
    }
    else if(action.type === shopActionTypes.GET_PRODUCTS_FAILURE) {
        return {
            ...state,
            errorMessage: action.payload,
            retrievingProducts: false
        }
    }

    return state;
}

export default shopReducer;