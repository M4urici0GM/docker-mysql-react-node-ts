import React, {
	useContext,
	createContext,
	useCallback,
	useState,
	useEffect,
} from 'react';

import * as auth from '~/services/authentication';

export interface IAuthContext {
	loading: boolean;
	user: auth.IUser | null;
	signIn(email: string, password: string): void;
	signUp(name: string, email: string, password: string): void;
	signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<auth.IUser | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const storedAuth = localStorage.getItem('R:auth');

		if (storedAuth) {
			const parseAuth: auth.IAuth = JSON.parse(storedAuth);

			if (parseAuth.authenticated) {
				setUser(parseAuth.user);
			}
		}

		setLoading(false);
	}, []);

	const signIn = useCallback(async (email: string, password: string) => {
		const response = await auth.signIn(email, password);

		if (response.authenticated) {
			localStorage.setItem('R:auth', JSON.stringify(response));

			setUser(response.user);
		}
	}, []);

	const signUp = useCallback(
		async (name: string, email: string, password: string) => {
			const response = await auth.signUp(name, email, password);

			if (response.authenticated) {
				localStorage.setItem('R:auth', JSON.stringify(response));

				setUser(response.user);
			}
		},
		[]
	);

	const signOut = useCallback(() => {
		setUser(null);
		localStorage.clear();
	}, []);

	return (
		<AuthContext.Provider value={{ loading, user, signIn, signUp, signOut }}>
			{children}
		</AuthContext.Provider>
	);
};

export function useAuth() {
	const context = useContext(AuthContext);

	return context;
}

export default AuthProvider;
