import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
	name: 'posts',
	initialState: [],
	reducers: {
		showPosts(initialState) {
			return [...initialState, {id:'qwerty', title: 'New post', body: 'Body for the newest post item'}]
		}
	}
});

const { showPosts } = postsSlice.actions;
const postsReducer = postsSlice.reducer;
export { showPosts, postsReducer };