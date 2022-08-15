import { AccountType } from '@utils/declarations/enums';

export type User = null | {
	uid: string;
	type: AccountType;
	email: string;
	fullName: string;
	firstName: string;
	lastName: string;
	createdAt: number;
	emailVerified: boolean;
};

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type BadgeProp = number | string;

export type HandleLoginParams = {
	email: string;
	password: string;
};

export type AuthErrors = { emailErr: boolean; passwordErr: boolean; emailMsg?: string; passwordMsg?: string };
