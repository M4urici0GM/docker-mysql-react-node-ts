import { Request, Response } from 'express';

import prisma from '~/configs/prisma';

export default {
	async index(_req: Request, res: Response) {
		try {
			const users = await prisma.user.findMany();

			return res.status(200).json(users);
		} catch (err) {
			return res.status(400).send(err);
		}
	},

	async getOne(req: Request, res: Response): Promise<Response> {
		try {
			const { userId } =  req.params;
			if (isNaN(parseInt(userId, 10))) {
				return res.status(404).send({ message: 'User not found' });
			}
		
			const user =await prisma.user.findOne({
				where: {
					id: parseInt(userId, 10),
				}
			});

			if (!user) {
				return res.status(404).send({ message: 'User not found' });
			}

			user.password = undefined!;

			return res.status(200).send(user);
		} catch (err) {
			return res.status(500).send(err);
		}
	}
};
