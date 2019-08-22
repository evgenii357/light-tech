import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import appReducer from './appReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const appStore = createStore(appReducer, composeEnhancers(applyMiddleware(logger)));
