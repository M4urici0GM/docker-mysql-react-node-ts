declare namespace NodeJS {
	export interface ProcessEnv {
		SECRET_HASH: string;
		PORT: number;
	}
}

declare namespace Express {
	interface Request {
		id?: string;
	}
}