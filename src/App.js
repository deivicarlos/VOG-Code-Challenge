import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { history, store } from './store/store';
import AppRouter from './router/routes';
import { AUTH_TOKEN } from './constants/api';
import { setAuthorizationToken } from './helpers/authorization-token-handler';

if (localStorage.getItem(AUTH_TOKEN)) {
  setAuthorizationToken();
}

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <AppRouter />
    </Router>
  </Provider>
);

export default App;
