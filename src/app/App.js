import React from 'react';
import Grid from '@mui/material/Grid';
import AppRouter from '../routes/AppRouter';
import './app.css';

const App = () => {
	return(
		<Grid container justifyContent="center">
			<Grid item xs={8}>
				<h1>Posterbook</h1>
			</Grid>

			<Grid item xs={8}>
				<AppRouter />
			</Grid>
		</Grid>
	);
}

export default App;