import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { postsReducer } from './slices';
import App from './components/app/App';

const store = configureStore({
	reducer: {
		posts: postsReducer
	}
});

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);