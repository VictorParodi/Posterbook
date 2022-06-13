import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import AppRouter from '../routes/AppRouter';
import { PostsContext } from '../context/PostsContext';
import './app.css';

const App = () => {
	const contextDefault = [
		{
			id: 1,
			title: 'Post one',
			body:''
		},
		{
			id: 2,
			title: 'Post two',
			body:''
		}
	];

	const [posts, setPosts] = useState(contextDefault);

	return(
		<Grid container justifyContent="center">
			<Grid item xs={8}>
				<h1>Posterbook</h1>
			</Grid>

			<Grid item xs={8}>
				<PostsContext.Provider value={{posts, setPosts}}>
					<AppRouter />
				</PostsContext.Provider>
			</Grid>
		</Grid>
	);
}

export default App;