import { Request, Response } from 'express';

import prisma from '../configs/prisma';

export default {
	async index(_req: Request, res: Response) {
		try {
			const users = await prisma.user.findMany();

			return res.status(200).json(users);
		} catch (err) {
			return res.status(400).send(err);
		}
	},
};
