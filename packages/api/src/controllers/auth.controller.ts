import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';

import User, { IUser } from '../models/User';
import generateAccessToken from '../helpers/generateAccessToken';

export default {
	async register(req: Request, res: Response) {
		try {
			const { name, email, password }: IUser = req.body;

			const user = await User.create({ name, email, password });

			user.password = undefined!;

			return res.status(200).json({
				authenticated: true,
				accessToken: generateAccessToken(user._id),
				user: { _id: user._id, email: user.email, name: user.name },
			});
		} catch (err) {
			return res.status(400).json(err);
		}
	},

	async authenticate(req: Request, res: Response) {
		try {
			const { email, password }: IUser = req.body;

			const user = await User.findOne({ email }).select('+password');

			if (!user) {
				return res.status(400).json({ message: 'User not found.' });
			}

			if (!(await bcrypt.compare(password, user.password))) {
				return res.status(400).json({ message: 'Invalid password.' });
			}

			const { _id, name } = user;

			return res.status(200).json({
				authenticated: true,
				accessToken: generateAccessToken(_id),
				user: { _id, email: user.email, name },
			});
		} catch (err) {
			return res.status(400).json(err);
		}
	},
};
