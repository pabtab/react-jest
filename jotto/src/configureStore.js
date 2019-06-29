import { createStore,applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import ReduxThunk from 'redux-thunk'

export const middlewares = [ReduxThunk];
const createStoreMiddleware = applyMiddleware(...middlewares)(createStore)

export default createStoreMiddleware(rootReducer);