import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { appRoutes } from './routes';
import Navbar from '../ui/navbar/Navbar';

const AppRouter = () => {
	const renderRoutes = appRoutes.map(({name, path, element}) => {
		return <Route key={name} path={path} element={element} />;
	});

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				{ renderRoutes }
			</Routes>
		</BrowserRouter>
	);
}

export default AppRouter;