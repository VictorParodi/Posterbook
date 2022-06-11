import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../helpers/getData";

const fetchPosts = createAsyncThunk('posts/fetchPosts', () => getData('posts'));

const postsSlice = createSlice({
	name: 'posts',
	initialState: [],
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