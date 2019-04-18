import {
  LOGIN_REQUEST_BEGIN,
  LOGIN_REQUEST_ERROR,
  LOGIN_REQUEST_SUCCESS,
  LOGOUT_REQUEST,
} from '../constants/actions';
import { AUTH_TOKEN } from '../constants/api';

const authReducerDefaultState = {
  isAuthenticated: !!localStorage.getItem(AUTH_TOKEN),
  isLoading: false,
  hasError: false,
  verificationEmailSent: false,
};

export default (state = authReducerDefaultState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST_BEGIN:
      return {
        ...state,
        hasError: false,
        isAuthenticated: false,
        isLoading: true,
      };

    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
      };

    case LOGIN_REQUEST_ERROR:
      return {
        ...state,
        hasError: true,
        isAuthenticated: false,
        isLoading: false,
      };

    case LOGOUT_REQUEST:
      return {
        ...state,
        hasError: true,
        isAuthenticated: false,
        isLoading: false,
      };

    default:
      return state;
  }
};
