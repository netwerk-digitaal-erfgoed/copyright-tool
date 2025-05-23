import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import { createHead  } from '@vueuse/head';
import VueGtm from 'vue-gtm';

const app = createApp(App);

const head = createHead();
app.use(head);
app.use(router);
app.use(store);
app.use(VueGtm, {
  id: 'GTM-WRB5NT4',
  vueRouter: router,
  enabled: import.meta.env.MODE === 'production',
  debug: import.meta.env.MODE !== 'production'
});

app.mount('#app');
