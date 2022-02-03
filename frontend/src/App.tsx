import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/index.css';

const App: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/'>
					<Route path='login' element={<p>Login</p>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
