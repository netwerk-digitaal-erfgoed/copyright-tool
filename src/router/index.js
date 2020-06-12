import Vue from 'vue';
import VueRouter from 'vue-router';
import Intro from '../views/Intro.vue';
import Step from '../views/Step.vue';
import Result from '../views/Result.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'intro',
    component: Intro,
    meta: { title: 'Beslismodel auteursrechten' }
  },
  {
    path: '/result',
    name: 'result',
    component: Result,
    meta: { title: 'Beslismodel auteursrechten' }
  },
  {
    path: '/step/:step?',
    name: 'step',
    component: Step,
    meta: { title: 'Beslismodel auteursrechten' }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
