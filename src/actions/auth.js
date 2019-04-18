import {
  apiResponseHandler,
  handleApiWarning,
  handleApiSuccess,
} from '../helpers/api-response-handler';
import {
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_BEGIN,
  LOGIN_REQUEST_ERROR,
  LOGOUT_REQUEST,
} from '../constants/actions';
import * as auth from '../services/auth';
import { history } from '../store/store';
import { AUTH_TOKEN, REFRESH_TOKEN } from '../constants/api';
import { setAuthorizationToken } from '../helpers/authorization-token-handler';

export const requestLoginBegin = () => ({
  type: LOGIN_REQUEST_BEGIN,
});

export const requestLoginSuccess = () => ({
  type: LOGIN_REQUEST_SUCCESS,
});

export const requestLoginError = () => ({
  type: LOGIN_REQUEST_ERROR,
});

export const loginUser = (email, password) => dispatch => {
  dispatch(requestLoginBegin());
  return auth
    .login(email, password)
    .then(({ data }) => {
      const result = apiResponseHandler(data);

      if (result) {
        dispatch(requestLoginSuccess());

        localStorage.setItem(AUTH_TOKEN, data.data.accessToken);
        localStorage.setItem(REFRESH_TOKEN, data.data.refreshToken);
        setAuthorizationToken();
        handleApiSuccess(data.message);
        history.push('/dashboard');
      } else {
        handleApiWarning(data.message);
        dispatch(requestLoginError());
      }
    })
    .catch(err => {
      handleApiWarning('Whoops something happened!');
      dispatch(requestLoginError());
      return Promise.reject();
    });
};

const requestLogout = () => ({
  type: LOGOUT_REQUEST,
  isFetching: false,
  isAuthenticated: false,
});

const removeTokenFromLocalStorage = () => {
  localStorage.removeItem(AUTH_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
  setAuthorizationToken();
};

export const logoutUser = () => dispatch => {
  dispatch(requestLogout());
  removeTokenFromLocalStorage();
};
