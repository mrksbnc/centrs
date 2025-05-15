import './assets/index.css';

import { createApp } from 'vue';
import App from './Old.App.vue';
import TempApp from './TempApp.vue';
import router from './router/router';

const app = createApp(TempApp);

app.use(router);

app.mount('#app');
