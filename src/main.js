import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import { createHead  } from '@vueuse/head';
import VueGtm from '@gtm-support/vue-gtm'

const cookie = document.cookie.split('; ').find(row => row.startsWith('NDE-regeljerechten='));
let optIn = false;

if (cookie) {
  if (cookie.split('=')[1] === 'accepted') {
    optIn = true;
  }
}

const app = createApp(App);

const head = createHead();
app.use(head);
app.use(router);
app.use(store);
app.use(VueGtm, {
  id: 'GTM-K3HSV4KF',
  vueRouter: router,
  enabled: optIn && import.meta.env.MODE === 'production',
  debug: import.meta.env.MODE !== 'production'
});

app.mount('#app');
