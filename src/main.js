import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';

Vue.config.productionTip = false;

new Vue({
  created() {
    const html = document.documentElement;
    html.setAttribute('lang', 'nl');
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app');
