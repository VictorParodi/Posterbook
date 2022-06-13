import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
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

const PostScreen = () => {
	const [open, setOpen] = useState(false);
	const [comments, setComments] = useState([]);
	const params = useParams();
	const id = parseInt(params.id);
	const getPost = useFetch(`/posts/${id}`);
	const [post, setPost] = useState(getPost);
	const newComments = useFetch(`/posts/${id}/comments`);
	let newPost = {};

	useEffect(() => {
		console.log('HERE !!!');
		setComments(newComments);
	}, [post, newComments]);

	const handleOpen = () => setOpen(true);
  const handleClose = () => {
		newPost = {
			id: post.id,
			title: `${post.id} !!!???`,
			body:post.body,
			userId: post.userId
		}
		updateData(newPost, `/posts/${post.id}`);
		setPost(newPost);
		setOpen(false);
	};

	const styles = {
		body: {
			padding: "20px",
			marginTop: "20px"
		}
	}

	return (
		<>
			<h1>{post.title}</h1>
			<Paper style={styles.body}>
				<p>{post.body}</p>
			</Paper>

			<Button onClick={handleOpen}>Edit post</Button>

			<Paper style={styles.body}>
				<h2>Comments</h2>
				{
					comments.map(({id, email, body}) => {
						return (
							<ul key={id}>
								<li>
									<h3>{email}</h3>
								</li>
								<p>{body}</p>
							</ul>
						)
					})
				}
			</Paper>

			<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
				<Box sx={style}>
					{post.title}
				</Box>
			</Modal>
		</>
	);
}

export default PostScreen;