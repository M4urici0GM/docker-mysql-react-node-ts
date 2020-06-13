import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

import { SECRET_HASH } from '../configs/env';

export default function AuthMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const authHeader = req.headers.authorization;

	if (!authHeader) {
		return res.status(401).json({ message: 'No token provived.' });
	}

	const parts = authHeader.split(' ');

	if (parts.length !== 2) {
		return res.status(401).json({ message: 'Token error' });
	}

	const [schema, token] = parts;

	if (!/^Bearer$/i.test(schema)) {
		return res.status(401).json({ message: 'Token malformatted' });
	}

	jwt.verify(token, SECRET_HASH, (err: any, decoded: any) => {
		if (err) {
			return res.status(401).json({ message: 'Invalid token' });
		}

		req.id = (decoded as any).id;

		return next();
	});
}
