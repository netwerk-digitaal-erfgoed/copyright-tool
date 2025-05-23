import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import { createHead  } from '@vueuse/head';

const app = createApp(App);

// Head manager initialiseren
const head = createHead();
app.use(head);
app.use(router);
app.use(store);

app.mount('#app');
