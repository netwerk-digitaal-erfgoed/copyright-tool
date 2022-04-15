import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import VueGtag from 'vue-gtag';
import VueMeta from 'vue-meta';

Vue.config.productionTip = false;

Vue.use(VueMeta);

const cookie = document.cookie.split('; ').find(row => row.startsWith('DEN-regeljerechten='));
let optIn = false;

if (cookie) {
  if (cookie.split('=')[1] === 'accepted') {
    optIn = true;
  }
}

Vue.use(VueGtag, {
  config: { id: 'G-DWYJWT4BRD' },
  // config: { id: process.env.VUE_APP_GOOGLE_ANALYTICS },
  enabled: optIn
}, router);

new Vue({
  created() {
    const html = document.documentElement;
    html.setAttribute('lang', 'nl');
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app');
