import authAPI from './authAPI';

export interface IUser {
	_id: string;
	email: string;
	name: string;
}

export interface IAuth {
	authenticated: boolean;
	accessToken: string;
	user: IUser;
}

export async function signIn(email: string, password: string): Promise<IAuth> {
	try {
		const response = await authAPI.post('/', { email, password });

		const data: IAuth = response.data;

		return data;
	} catch (err) {
		throw err;
	}
}

export async function signUp(
	name: string,
	email: string,
	password: string
): Promise<IAuth> {
	try {
		const response = await authAPI.post('/register', {
			name,
			email,
			password,
		});

		const data: IAuth = response.data;

		return data;
	} catch (err) {
		throw err;
	}
}
