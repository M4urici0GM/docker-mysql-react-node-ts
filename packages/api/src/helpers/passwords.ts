import bcrypt from 'bcryptjs';

export async function encryptPassword(password: string): Promise<string> {
	const hash = await bcrypt.hash(password, 10);
	return hash;
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
    const valid = await bcrypt.compare(password, hash);
    return valid;
}

export async function encryptPasswordWithSalt(password: string, salt: string = ""): Promise<string> {
    const hash = await bcrypt.hash(password, salt);
    return hash;
}
