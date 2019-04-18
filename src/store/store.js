import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import authReducer from '../reducers/auth';
import userReducer from '../reducers/user';
// import assetReducer from '../reducers/asset';
// import digitalModelReducer from '../reducers/digital-model';
// import projectReducer from '../reducers/project';
// import organizationReducer from '../reducers/organization';
// import registrationReducer from '../reducers/registration';
// import roleReducer from '../reducers/role';
// import viewerReducer from '../reducers/viewer';
// import planReducer from '../reducers/plan';

// Libraries reducers
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
  // Project
  // asset: assetReducer,
  auth: authReducer,
  // digitalModel: digitalModelReducer,
  // organization: organizationReducer,
  // project: projectReducer,
  // registration: registrationReducer,
  // role: roleReducer,
  user: userReducer,
  // viewer: viewerReducer,
  // plan: planReducer,
  // // Libraries
  form: formReducer,
});

export const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancers(...enhancer)
);
