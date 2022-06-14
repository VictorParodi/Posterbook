import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import jsonplaceholder from '../../apis/jsonplaceholder';
import { PostsContext } from '../../context/PostsContext';

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

const styles = {
	link: {
		textDecoration: "none",
		color: "#FFF"
	},
	div: {
		marginBottom: "50px"
	}
}

const Navbar = () => {
	const { posts, setPosts } = useContext(PostsContext);
	const [open, setOpen] = useState(false);
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = (event) => {
		setOpen(true);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const calId = Math.round((Math.random() * (1000 - 101) + 101));

		const myPost = {
			id: calId,
			userId: calId,
			title: title,
			body: body
		};

		const newPosts = [myPost, ...posts];

		(async() => {
			await jsonplaceholder.post('/posts', myPost);
		})();

		setPosts(newPosts);
		setTitle('');
		setBody('');
		handleClose();
	}

	const handleInputChange = (event, param) => {
		param ? setBody(event.target.value) : setTitle(event.target.value);
	}

	return (
		<div style={styles.div}>
			<ButtonGroup variant="contained" aria-label="outlined primary button group">
				<Button>
					<Link style={styles.link} to="/">Home</Link>
				</Button>

				<Button>
					<Link style={styles.link} to="/about">About</Link>
				</Button>

				<Button onClick={ handleOpen }>
					Create a post
				</Button>
			</ButtonGroup>


			<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
				<Box sx={style}>
					<Box
						onSubmit={handleSubmit}
						component="form"
						sx={{'& > :not(style)': { m: 1, width: '25ch' }}}
						noValidate
						autoComplete="off"
					>
						<TextField
							value={title}
							id="title-field"
							label="Title"
							variant="outlined"
							onChange={ handleInputChange}
						/>

						<TextField
							value={body}
							id="body-field"
							label="Post body"
							variant="outlined"
							onChange={ event => handleInputChange(event, 'body')}
						/>

						<Button onClick={handleSubmit}>Create</Button>
					</Box>
				</Box>
			</Modal>
		</div>
	);
}

export default Navbar;