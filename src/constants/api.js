import API_ENDPOINT from '../utils/env';

export const AUTH_TOKEN = 'accessToken';
export const REFRESH_TOKEN = 'refreshToken';

/* Auth */
export const AUTH_LOGIN = `${API_ENDPOINT}/login`;
export const AUTH_LOGOUT = `${API_ENDPOINT}/logout`;

/* User */
export const USER_INFO = `${API_ENDPOINT}/user/info`;
