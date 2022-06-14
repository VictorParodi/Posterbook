import React, { useContext, useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { red } from '@mui/material/colors';
import { PostsContext } from '../../context/PostsContext';
import { deleteData } from '../../helpers/deleteData';
import { updateData } from '../../helpers/updateData';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CustomRow = ({row}) => {
	const [inputTitle, setInputTitle] = useState(row.title)
	const [open, setOpen] = useState(false);
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

	const handleOpen = (event) => {
		setOpen(true);
	};

  const handleClose = () => {
		setOpen(false);
	};

	const handleInputChange = (event) => {
		setInputTitle(event.target.value);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		const newPost = posts.find(post => post.id === row.id);
		newPost.title = inputTitle;

		const updatedPosts = posts.map(post => {
			if (post.id === row.id) { return newPost };
			return post;
		});

		updateData(newPost, `/posts/${row.id}`);
		setPosts(updatedPosts);
		handleClose();
	}

	const styles = {
		icons: { cursor: 'pointer' }
	}

	return (
		<>
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
						onClick={ handleOpen }
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

			<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
				<Box sx={style}>
					<Box
						onSubmit={ handleSubmit }
						component="form"
						sx={{'& > :not(style)': { m: 1, width: '25ch' }}}
						noValidate
						autoComplete="off"
					>
						<TextField
							value={inputTitle}
							id="outlined-basic"
							label="Title"
							variant="outlined"
							onChange={ handleInputChange}
						/>
						{/* <TextField id="filled-basic" label="Body" variant="outlined" /> */}
						{/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
					</Box>
				</Box>
			</Modal>
		</>
	);
}

export default CustomRow;