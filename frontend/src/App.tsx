import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import InputText from './components/InputText';
import './styles/index.css';

const App: FC = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/'>
					<Route
						index
						element={
							<div style={{ width: '300px' }}>
								<InputText
									label={'Label'}
									placeholder='Introduce tu nombre...'
								/>
							</div>
						}
					/>
					<Route path='login' element={<p>Login</p>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
