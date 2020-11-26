import Vue from 'vue';
import VueRouter from 'vue-router';
import Intro from '../views/Intro.vue';
import Step from '../views/Step.vue';
import Result from '../views/Result.vue';
import Colofon from '../views/Colofon.vue';
import AboutCopyright from '../views/AboutCopyright.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'intro',
    component: Intro,
    meta: { title: 'Intro | Beslismodel auteursrechten' }
  },
  {
    path: '/colofon',
    name: 'colofon',
    component: Colofon,
    meta: { title: 'Colofon | Beslismodel auteursrechten' }
  },
  {
    path: '/copyright',
    name: 'copyright',
    component: AboutCopyright,
    meta: { title: 'Wat zijn auteursrechten ook alweer? | Beslismodel auteursrechten' }
  },
  {
    path: '/result',
    name: 'result',
    component: Result,
    meta: { title: 'Advies | Beslismodel auteursrechten' }
  },
  {
    path: '/step/:step?',
    name: 'step',
    component: Step,
    meta: { title: 'Stap | Beslismodel auteursrechten' }
  },
  { // catch all 404 - define at the very end
    path: '*',
    name: 'notfound',
    component: NotFound,
    meta: { title: '404 | Beslismodel auteursrechten' }
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
