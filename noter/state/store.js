import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';

const loggerMiddleware = createLogger({ predicate: () => __DEV__ });
const enhancer = compose(applyMiddleware(loggerMiddleware));
const store = createStore(rootReducer, enhancer);

export default store;
