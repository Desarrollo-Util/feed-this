import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import './styles/index.css';

const App: FC = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/'>
					<Route index element={<LoginForm />} />
					<Route path='login' element={<p>Login</p>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
