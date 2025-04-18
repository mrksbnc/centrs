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
	},
});

export default router;
