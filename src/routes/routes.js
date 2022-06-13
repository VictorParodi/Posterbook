import {
	HomeScreen,
	PostScreen,
	AboutScreen
} from './../screens';

const appRoutes = [
	{
		name: 'home',
		path: '/',
		element: <HomeScreen />
	},
	{
		name: 'post',
		path: '/posts/:id',
		element: <PostScreen />
	},
	{
		name: 'about',
		path: '/about',
		element: <AboutScreen />
	}
];

export { appRoutes };