import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import { persistStore } from 'redux-persist';

const middleware = []

if(process.env.NODE_ENV === 'development') {
    middleware.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store; 

export const persistor = persistStore(store)




