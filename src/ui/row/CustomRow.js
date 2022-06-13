import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { red } from '@mui/material/colors';
import { PostsContext } from '../../context/PostsContext';
import { deleteData } from '../../helpers/deleteData';

const CustomRow = ({row}) => {
	const { posts, setPosts } = useContext(PostsContext);
	const navigate = useNavigate();

	const handleView = () => {
		navigate(`/posts/${row.id}`);
	}

	const handleDelete = () => {
		deleteData(`/posts/${row.id}`);
		const newPosts = posts.filter(post => post.id !== row.id);
		setPosts(newPosts);
	}

	const styles = {
		icons: { cursor: 'pointer' }
	}

	return (
		<TableRow>
			<TableCell>{row.id}</TableCell>
			<TableCell>{row.title}</TableCell>

			<TableCell align="right">
				<VisibilityIcon
					style={styles.icons}
					key="view"
					color="primary"
					onClick={ handleView }
				/>
			</TableCell>

			<TableCell align="right">
				<EditIcon
					style={styles.icons}
					key="edit"
					color="success"
					onClick={ () => console.log('Edit ', row.id) }
				/>
			</TableCell>

			<TableCell align="right">
				<DeleteIcon
					style={styles.icons}
					key="del"
					sx={{ color: red[500] }}
					onClick={ handleDelete }
				/>
			</TableCell>
		</TableRow>
	);
}

export default CustomRow;