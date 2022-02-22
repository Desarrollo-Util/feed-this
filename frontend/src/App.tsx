import { FC, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import { profileRequest } from './lib/api/profile.request';
import { AuthContext } from './lib/contexts/auth.context';
import './styles/index.css';
import { AuthState } from './types/auth-state.type';
import { User } from './types/user.type';

const App: FC = () => {
	const authState = useAuth();
	console.log(authState);

	return (
		<BrowserRouter>
			<AuthContext.Provider value={authState}>
				<Header />
				<Routes>
					<Route path='/'>
						<Route
							index
							element={
								!authState.auth?.jwt ? <LoginForm /> : <h1>Bienvenido</h1>
							}
						/>
						<Route path='login' element={<p>Login</p>} />
					</Route>
				</Routes>
			</AuthContext.Provider>
		</BrowserRouter>
	);
};

const useAuth = () => {
	const [auth, setAuth] = useState<AuthState | undefined>({
		jwt: localStorage.getItem('jid') || undefined,
	});

	useEffect(() => {
		auth?.jwt && getProfile(auth.jwt);
	}, []);

	const login = (jwt: string, user: User) => {
		localStorage.setItem('jid', jwt);
		setAuth({ jwt, user });
	};

	const logout = () => {
		localStorage.removeItem('jid');
		setAuth(undefined);
	};

	const getProfile = async (jwt: string) => {
		const profileResponse = await profileRequest(jwt);

		profileResponse.error
			? logout()
			: setAuth({ jwt, user: profileResponse.data });
	};

	return {
		auth,
		login,
		logout,
	};
};

export default App;
