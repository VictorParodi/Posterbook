import React from 'react';
import Grid from '@mui/material/Grid';
import List from '../list/List';
import './app.css';

const App = () => {
	return(
		<Grid container justifyContent="center">
			<List />
		</Grid>
	);
}

export default App;