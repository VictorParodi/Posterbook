import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { appRoutes } from './routes';

const AppRouter = () => {
	const renderRoutes = appRoutes.map(({name, path, element}) => {
		return <Route key={name} path={path} element={element} />;
	});

	return (
		<BrowserRouter>
			<Routes>
				{ renderRoutes }
			</Routes>
		</BrowserRouter>
	);
}

export default AppRouter;