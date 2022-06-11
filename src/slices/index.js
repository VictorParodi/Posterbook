import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jsonplaceholder from './../apis/jsonplaceholder';

const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
	const response = await jsonplaceholder.get('/posts');
	const { data } = await response;
	return data;
});

const postsSlice = createSlice({
	name: 'posts',
	initialState: [],
	reducers: {
		showPosts(initialState) {
			return [...initialState, {id:'qwerty', title: 'New post', body: 'Body for the newest post item'}]
		}
	},
	extraReducers: (builder) => {
		builder
		.addCase(fetchPosts.pending, (state, action) => {
			return state;
		})
		.addCase(fetchPosts.fulfilled, (state, action) => {
			return action.payload;
		})
	}
});

const { showPosts } = postsSlice.actions;
const postsReducer = postsSlice.reducer;

export {
	showPosts,
	fetchPosts,
	postsReducer
};