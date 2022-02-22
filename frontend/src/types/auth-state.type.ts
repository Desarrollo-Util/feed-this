import { User } from './user.type';

export type AuthState = {
	jwt?: string;
	user?: User;
};
