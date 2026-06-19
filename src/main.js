import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import { createHead  } from '@vueuse/head';
import VueMatomo from 'vue-matomo'

const app = createApp(App);

const head = createHead();
app.use(head);
app.use(router);
app.use(store);

app.use(VueMatomo, {
  host: '//matomo.netwerkdigitaalerfgoed.nl/',
  siteId: 5,
  trackerUrl: '//matomo.netwerkdigitaalerfgoed.nl/matomo.php'
});
  
app.mount('#app');
window._paq.push(['trackPageView']);
