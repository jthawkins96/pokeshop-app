import cartActionTypes from './cartActionTypes';

const initialState = {
    showCart:false,
    cart: []
}

const cartReducer = (state=initialState, action) => {
    if(action.type === cartActionTypes.TOGGLE_CART) {
        return {
            ...state,
            showCart: !state.showCart
        }
    }
    else if(action.type === cartActionTypes.ADD_ITEM_TO_CART) {
        if(state.cart.reduce( (acc, item) => (acc || item.id === action.payload.id), false)) {
            let cart = state.cart;
            let filteredCart = cart.filter(i => i.id !== action.payload.id)
            let currentItem = cart.filter(i => i.id === action.payload.id)[0]
            currentItem.count++;
            return {
                ...state,
                cart: [...filteredCart, currentItem]
            }
        }

        return {
            ...state,
            cart: [...state.cart, { count: 1, ...action.payload }]
        }
    }
    else if(action.type === cartActionTypes.REMOVE_ITEM_FROM_CART) {
        let updatedCart = state.cart.filter(item => item.id !== action.payload)
        return  {
            ...state,
            cart: updatedCart 
        }
    }
    else if(action.type === cartActionTypes.ADD_TO_ITEM_QUANTITY) {
        let currentCart = state.cart.slice();
        let itemRef = currentCart.map(cartItem => cartItem.id).indexOf(action.payload);
        currentCart[itemRef].count++
        
        return {
            ...state,
            cart: currentCart
        }

    }
    else if(action.type === cartActionTypes.REMOVE_FROM_ITEM_QUANTITY) {
        let currentCart = state.cart.slice();
        let itemRef = currentCart.map(cartItem => cartItem.id).indexOf(action.payload);

        if(currentCart[itemRef].count === 1)
            return state
        else
            currentCart[itemRef].count--
        
        return {
            ...state,
            cart: currentCart
        }

    }
    else if(action.type === cartActionTypes.CLEAR_CART) {
        return {
            ...state,
            cart: []
        }
    }
    else {
        return state;
    }
}

export default cartReducer;