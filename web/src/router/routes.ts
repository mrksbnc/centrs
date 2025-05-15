export const centrsRoutes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/StartGamePage.vue'),
	},
	{
		path: '/game',
		name: 'game',
		component: () => import('@/views/GamePage.vue'),
	},
];
