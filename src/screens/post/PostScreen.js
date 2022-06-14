import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import Paper from '@mui/material/Paper';

const PostScreen = () => {
	const [comments, setComments] = useState([]);
	const params = useParams();
	const id = parseInt(params.id);
	const post = useFetch(`/posts/${id}`);
	const newComments = useFetch(`/posts/${id}/comments`);

	useEffect(() => {
		setComments(newComments);
	}, [post, newComments]);

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
		</>
	);
}

export default PostScreen;