import jwt from 'jsonwebtoken';

import { SECRET_HASH } from '~/configs/env';

export default function generateAccessToken(id: string) {
	const accessToken = jwt.sign({ id }, SECRET_HASH, {
		expiresIn: 7200,
	});

	return accessToken;
}

export function generateAccessTokenWithClaims(id: string, claims: Array<string>): string {
	const accessToken = jwt.sign(
		{ id, ...claims },
		SECRET_HASH,
		{ expiresIn: 7200 }
	);

	return accessToken;
}