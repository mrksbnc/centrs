import ComingSoonView from '@/views/ComingSoonView.vue';
import HomeView from '@/views/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: ComingSoonView,
		},
		{
			path: '/home',
			name: 'original-home',
			component: HomeView,
		},
	],
});

export default router;
