import axios from 'axios';

import { REACT_APP_API_URL } from '~/configs/env';
import { IAuth } from './authentication';

const auth = localStorage.getItem('R:auth');

let accessToken;

if (auth) {
	const parseAuth: IAuth = JSON.parse(auth);

	if (parseAuth.authenticated) {
		accessToken = parseAuth.accessToken;
	}
}

const serverAPI = axios.create({
	baseURL: `${REACT_APP_API_URL}/api/v1`,
	headers: {
		Authorization: `Bearer ${accessToken}`,
	},
});

export default serverAPI;
