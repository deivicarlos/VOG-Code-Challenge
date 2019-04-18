import axios from 'axios';
import { AUTH_LOGIN, AUTH_LOGOUT } from '../constants/api';

export const login = (username, password) =>
  axios.post(AUTH_LOGIN, { username, password });

export const logout = () => axios.get(AUTH_LOGOUT);
