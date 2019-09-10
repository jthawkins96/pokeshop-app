import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

if(process.env.NODE_ENV === "development") {
    middleware.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middleware))

sagaMiddleware.run(rootSaga);

export default store; 

export const persistor = persistStore(store)




