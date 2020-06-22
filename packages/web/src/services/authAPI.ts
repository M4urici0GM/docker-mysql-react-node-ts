import axios from 'axios';
import { REACT_APP_API_URL } from '~/configs/env';

const authAPI = axios.create({ baseURL: `${REACT_APP_API_URL}/auth` });

export default authAPI;
