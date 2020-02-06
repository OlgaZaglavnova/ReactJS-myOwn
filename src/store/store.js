import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import chatReducer from './chatReducer';
import botMiddleware from './botMiddleware';
import chatMiddleware from './chatMiddleware';
import addMiddleware from './addMiddleware';
import {createLogger} from 'redux-logger';
import {createBrowserHistory} from 'history';
import {routerMiddleware, connectRouter} from 'connected-react-router';

export const history = createBrowserHistory();

const reducer = combineReducers({
    chatReducer,
    router: connectRouter(history),
});
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};
const logger = createLogger();

export const initStore =(preloadedState = {}) => {
    //return createStore(reducer, preloadedState, compose(applyMiddleware(logger, botMiddleware), devTools));
    return createStore(reducer, preloadedState, compose(applyMiddleware(routerMiddleware(history), logger, addMiddleware, chatMiddleware, botMiddleware), devTools));
};