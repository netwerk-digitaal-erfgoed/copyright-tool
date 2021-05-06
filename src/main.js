import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import VueGtag from 'vue-gtag';

Vue.config.productionTip = false;

const cookie = document.cookie.split('; ').find(row => row.startsWith('DEN-regeljerechten='));
let optIn = false;

if (cookie) {
  if (cookie.split('=')[1] === 'accepted') {
    optIn = true;
  }
}

Vue.use(VueGtag, {
  config: { id: process.env.VUE_APP_GOOGLE_ANALYTICS },
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
