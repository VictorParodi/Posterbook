import React from 'react';
import Grid from '@mui/material/Grid';
import List from '../list/List';
import './app.css';

const App = () => {
	return(
		<>
			<Grid container justifyContent="center">
				<Grid item xs={8}>
					<h1>Posterbook</h1>
				</Grid>

				<List />
			</Grid>
		</>
	);
}

export default App;