import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';

import generateAccessToken from '../helpers/generateAccessToken';
import encryptPassword from '../helpers/encryptPassword';
import prisma from '../configs/prisma';

export default {
	async register(req: Request, res: Response) {
		try {
			const { name, email, password } = req.body;

			const user = await prisma.user.create({
				data: {
					name,
					email,
					password: await encryptPassword(password),
				},
			});

			user.password = undefined!;

			return res.status(200).json({
				authenticated: true,
				accessToken: generateAccessToken(user.id.toString()),
				user,
			});
		} catch (err) {
			return res.status(400).send(err);
		}
	},

	async authenticate(req: Request, res: Response) {
		try {
			const { email, password } = req.body;

			const user = await prisma.user.findOne({ where: { email } });

			if (!user) {
				return res.status(400).json({ message: 'User not found.' });
			}

			if (!(await bcrypt.compare(password, user.password))) {
				return res.status(400).json({ message: 'Invalid password.' });
			}

			user.password = undefined!;

			return res.status(200).json({
				authenticated: true,
				accessToken: generateAccessToken(user.id.toString()),
				user,
			});
		} catch (err) {
			return res.status(400).send(err);
		}
	},
};
