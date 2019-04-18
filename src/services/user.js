import axios from 'axios';
import { USER_INFO } from '../constants/api';

export const fetchUserInfo = () => axios.get(USER_INFO);
