import { createRouter, createWebHistory } from 'vue-router';
import Intro from '../views/Intro.vue';
import Step from '../views/Step.vue';
import Result from '../views/Result.vue';
import Colofon from '../views/Colofon.vue';
import AboutCopyright from '../views/AboutCopyright.vue';
import Licenties from '../views/Licenties.vue';
import RechtszaakLeiden from '../views/RechtszaakLeiden.vue';
import Handleiding from '../views/Handleiding.vue';
import NotFound from '../views/NotFound.vue';

import Outofcommerce from '../views/outofcommerce.vue';
import Uitzonderingen from '../views/Uitzonderingen.vue';
import Model from '../views/modelclausules.vue';

const routes = [
  {
    path: '/',
    name: 'intro',
    component: Intro
  },
  {
    path: '/colofon',
    name: 'colofon',
    component: Colofon
  },
  {
    path: '/copyright',
    name: 'copyright',
    component: AboutCopyright
  },
  {
    path: '/result',
    name: 'result',
    component: Result
  },
  {
    path: '/Outofcommerce',
    name: 'Outofcommerce',
    component: Outofcommerce
  },
  {
    path: '/Uitzonderingen',
    name: 'Uitzonderingen',
    component: Uitzonderingen
  },
  {
    path: '/Model',
    name: 'Model',
    component: Model
  },
  {
    path: '/Licenties',
    name: 'Licenties',
    component: Licenties
  },
  {
    path: '/RechtszaakLeiden',
    name: 'RechtszaakLeiden',
    component: RechtszaakLeiden
  },
  {
    path: '/handleiding',
    name: 'Handleiding',
    component: Handleiding
  },
  {
    path: '/step/:step?',
    name: 'step',
    component: Step
  },
  { // catch all 404 - define at the very end
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
