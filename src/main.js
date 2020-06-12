import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import Hotjar from 'vue-hotjar';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

Vue.use(Hotjar, {
  id: '1813134',
  snippetVersion: 6,
  isProduction: true
});
