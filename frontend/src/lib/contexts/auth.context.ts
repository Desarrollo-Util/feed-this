import { createContext } from 'react';
import { AuthState } from '../../types/auth-state.type';
import { User } from '../../types/user.type';

type AuthValue = {
	auth: AuthState | undefined;
	login: (jwt: string, user: User) => void;
	logout: () => void;
};

export const AuthContext = createContext<AuthValue>({} as any);
