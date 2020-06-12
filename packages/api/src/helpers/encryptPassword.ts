import bcrypt from 'bcryptjs';

export default async function encryptPassword(
	password: string
): Promise<string> {
	const hash = await bcrypt.hash(password, 10);

	return hash;
}
