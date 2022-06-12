import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { fetchPosts } from '../../slices';
import { red } from '@mui/material/colors';

const List = () => {
	const posts = useSelector(state => state.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	const columns = [
		{
			field: 'title',
			headerName: 'Post title',
			width: 1000
		},
		{
			field: 'actions',
			headerName: 'Actions',
			width: 180,
			renderCell: () => {
				return (
					[
						<VisibilityIcon
							key="view"
							style={{'margin': '10%'}}
							color="primary"
							onClick={() => console.log('View')}
						/>,
						<EditIcon
							key="edit"
							style={{'margin': '10%'}}
							color="success"
							onClick={() => console.log('Edit')}
						/>,
						<DeleteIcon
							key="del"
							style={{'margin': '10%'}}
							sx={{ color: red[500] }}
							onClick={() => console.log('Delete')}
						/>
					]
				);
			}
		}
	];

	const rows = posts.map(postItem => postItem);

	return (
		<DataGrid
			rows={rows}
			columns={columns}
			pageSize={10}
			rowsPerPageOptions={[10]}
			checkboxSelection={false}
			autoHeight
			hideFooterSelectedRowCount={true}
			disableColumnFilter={true}
			disableColumnMenu={true}
		/>
	);
}

export default List;