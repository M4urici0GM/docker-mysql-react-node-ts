import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

import generateAccessToken from '../helpers/generateAccessToken';
import encryptPassword from '../helpers/encryptPassword';

const prisma = new PrismaClient();

export default {
	async register(req: Request, res: Response) {
		try {
			const { cpf, name, email, password, type } = req.body;

			const user = await prisma.user.create({
				data: {
					cpf,
					name,
					email,
					password: await encryptPassword(password),
					type,
				},
			});

			user.password = undefined!;

			return res.status(200).json({
				authenticated: true,
				accessToken: generateAccessToken(user.id.toString()),
				user,
			});
		} catch (err) {
			return res.status(400).json(err);
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

			const { id, name } = user;

			return res.status(200).json({
				authenticated: true,
				accessToken: generateAccessToken(id.toString()),
				user: { id, email: user.email, name },
			});
		} catch (err) {
			return res.status(400).json(err);
		}
	},
};
