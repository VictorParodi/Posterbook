import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import { DataGrid } from '@mui/x-data-grid';
import { showPosts } from '../../slices';

const columns = [
	{ field:  'title', headerName: 'Post title', width: 1000 },
	{ field:  'actions', headerName: 'Actions', width: 100 }
];

const rows = [
	{ id:0, title: 'Post number 1', actions: "Delete" },
	{ id:1, title: 'Post number 2', actions: "Delete" },
	{ id:2, title: 'Post number 3', actions: "Delete" },
	{ id:3, title: 'Post number 4', actions: "Delete" },
	{ id:4, title: 'Post number 5', actions: "Delete" },
	{ id:5, title: 'Post number 6', actions: "Delete" },
	{ id:6, title: 'Post number 7', actions: "Delete" },
	{ id:7, title: 'Post number 8', actions: "Delete" },
	{ id:8, title: 'Post number 9', actions: "Delete" },
	{ id:9, title: 'Post number 10', actions: "Delete" }
];

const List = () => {
	const posts = useSelector(state => state.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(showPosts());
	}, [dispatch]);

	console.log('POSTS ===> ', posts);

	return (
			<Grid item xs={8}>
				<DataGrid
					rows={rows}
					columns={columns}
					pageSize={5}
					rowsPerPageOptions={[5]}
					checkboxSelection={false}
					autoHeight
					hideFooterSelectedRowCount={true}
					disableColumnFilter={true}
					disableColumnMenu={true}
				/>
			</Grid>
	);
}

export default List;