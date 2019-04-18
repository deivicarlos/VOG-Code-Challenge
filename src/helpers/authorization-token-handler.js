import axios from 'axios';
import { AUTH_TOKEN, REFRESH_TOKEN } from '../constants/api';

const setAuthorizationHeaders = accessToken => {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

const deleteAuthorizationHeaders = () => {
  console.log('deleteAuthorizationHeaders');
  delete axios.defaults.headers.common.Authorization;
};

export const setAuthorizationToken = () => {
  const accessToken = localStorage.getItem(AUTH_TOKEN);

  if (accessToken) {
    localStorage.setItem(AUTH_TOKEN, accessToken);
    setAuthorizationHeaders(accessToken);
  } else {
    localStorage.removeItem(AUTH_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    deleteAuthorizationHeaders();
  }
};
