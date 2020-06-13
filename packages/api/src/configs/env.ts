import dotenv from 'dotenv';

dotenv.config();

export const { SECRET_HASH } = process.env;
export const { PORT } = process.env;
