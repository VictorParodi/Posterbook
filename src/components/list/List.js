import React, { useState, useEffect, useContext} from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';

import { PostsContext } from '../../context/PostsContext';
import { useFetch } from '../../hooks/useFetch';
import { getColumns, getRows } from '../../helpers/configTable';

const List = () => {
	const { posts, setPosts } = useContext(PostsContext)
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const newPosts = useFetch('/posts');

	useEffect(() => {
		setPosts(newPosts);
	}, [newPosts, setPosts]);

	const handlePageChange = (event, newPage) => setPage(newPage);

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const rows = posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(postItem => {
		return getRows(postItem);
	});

	return (
		<Paper>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						{ getColumns() }
					</TableHead>

					<TableBody>
						{ rows }
					</TableBody>
				</Table>
			</TableContainer>

			<TablePagination
				rowsPerPageOptions={[5, 10, 25]}
				component="div"
				count={posts.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={ handlePageChange }
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	);
}

export default List;