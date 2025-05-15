import { createRouter, createWebHistory } from 'vue-router';
import { centrsRoutes } from './routes';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: centrsRoutes,
	scrollBehavior(to) {
		if (to.hash) {
			return {
				el: to.hash,
			};
		}
		return { top: 0 }; // Always scroll to top when navigating
	},
});

export default router;
