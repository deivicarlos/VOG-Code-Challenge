import {
  FETCH_USER_INFO_BEGIN,
  FETCH_USER_INFO_ERROR,
  FETCH_USER_INFO_SUCCESS,
} from '../constants/actions';

const userReducerDefaultState = {
  hasError: false,
  isLoading: false,
  userInfo: {},
};

export default (state = userReducerDefaultState, action) => {
  switch (action.type) {
    case FETCH_USER_INFO_BEGIN:
      return {
        ...state,
        hasError: false,
        isLoading: true,
      };

    case FETCH_USER_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userInfo: action.user,
      };

    case FETCH_USER_INFO_ERROR:
      return {
        ...state,
        hasError: true,
        isLoading: false,
        userInfo: action.user,
      };

    default:
      return state;
  }
};
