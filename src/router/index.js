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
    meta: { title: 'Intro | Beslismodel auteursrechten' }
  },
  {
    path: '/result',
    name: 'result',
    component: Result,
    meta: { title: 'Resultaat | Beslismodel auteursrechten' }
  },
  {
    path: '/step/:step?',
    name: 'step',
    component: Step,
    meta: { title: 'Stap | Beslismodel auteursrechten' }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
