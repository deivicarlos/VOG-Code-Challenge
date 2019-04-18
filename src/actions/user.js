import {
  FETCH_USER_INFO_BEGIN,
  FETCH_USER_INFO_ERROR,
  FETCH_USER_INFO_SUCCESS,
} from '../constants/actions';
import * as userService from '../services/user';
import { handleApiWarning } from '../helpers/api-response-handler';

const fetchUserInfoBegin = () => ({
  type: FETCH_USER_INFO_BEGIN,
});
const fetchUserInfoSuccess = user => ({
  type: FETCH_USER_INFO_SUCCESS,
  user,
});
const fetchUserInfoError = () => ({
  type: FETCH_USER_INFO_ERROR,
});

export const fetchUserInfo = () => dispatch => {
  dispatch(fetchUserInfoBegin());
  return userService
    .fetchUserInfo()
    .then(({ data }) => {
      console.log({ data });

      dispatch(fetchUserInfoSuccess(data.data));
      return Promise.resolve();
    })
    .catch(err => {
      dispatch(fetchUserInfoError());
      handleApiWarning(dispatch, err);
      return Promise.reject();
    });
};
