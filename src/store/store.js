import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import authReducer from '../reducers/auth';
import userReducer from '../reducers/user';

export const history = createBrowserHistory();
const routerMiddlewareWrapped = routerMiddleware(history);

const middleware = [thunk, routerMiddlewareWrapped];
const enhancer = [applyMiddleware(...middleware)];

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  form: formReducer,
});

export const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancers(...enhancer)
);
