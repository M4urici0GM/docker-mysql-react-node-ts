import jwt from 'jsonwebtoken';

import { SECRET_HASH } from '../configs/env';

export default function generateAccessToken(_id: string) {
	const accessToken = jwt.sign({ _id }, SECRET_HASH, {
		expiresIn: 86400,
	});

	return accessToken;
}
