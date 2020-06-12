import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
	async index(_req: Request, res: Response) {
		try {
			const users = await prisma.user.findMany();

			return res.status(200).json(users);
		} catch (err) {
			return res.status(400).json(err);
		}
	},
};
