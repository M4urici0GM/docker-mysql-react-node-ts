import { Request, Response } from 'express';

import User from '../models/User';

export default {
	async index(req: Request, res: Response) {
		try {
			const users = await User.find();

			return res.status(200).json(users);
		} catch (err) {
			return res.status(400).json(err);
		}
	},
};
