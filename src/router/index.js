import Vue from 'vue';
import VueRouter from 'vue-router';
import Intro from '../views/Intro.vue';
import Step from '../views/Step.vue';
import Result from '../views/Result.vue';
import Colofon from '../views/Colofon.vue';
import AboutCopyright from '../views/AboutCopyright.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

const metaDescription = 'Erfgoedcollecties zijn vaak omvangrijk en divers. Het is niet altijd duidelijk of een werk nog auteursrechtelijk beschermd is en bij wie de auteursrechten liggen. Dit beslismodel helpt je de juiste stappen te nemen om de rechten situatie van een bepaald collectie onderdeel vast te stellen.';
const routes = [
  {
    path: '/',
    name: 'intro',
    component: Intro,
    meta: {
      title: 'Intro | Beslismodel auteursrechten | Regel je rechten',
      metaTags: [
        {
          name: 'description',
          content: metaDescription
        },
        {
          property: 'og:description',
          content: metaDescription
        }
      ]
    }
  },
  {
    path: '/colofon',
    name: 'colofon',
    component: Colofon,
    meta: {
      title: 'Colofon | Beslismodel auteursrechten | Regel je rechten',
      metaTags: [
        {
          name: 'description',
          content: metaDescription
        },
        {
          property: 'og:description',
          content: metaDescription
        }
      ]
    }
  },
  {
    path: '/copyright',
    name: 'copyright',
    component: AboutCopyright,
    meta: {
      title: 'Wat zijn auteursrechten ook alweer? | Beslismodel auteursrechten | Regel je rechten',
      metaTags: [
        {
          name: 'description',
          content: metaDescription
        },
        {
          property: 'og:description',
          content: metaDescription
        }
      ]
    }
  },
  {
    path: '/result',
    name: 'result',
    component: Result,
    meta: {
      title: 'Advies | Beslismodel auteursrechten | Regel je rechten',
      metaTags: [
        {
          name: 'description',
          content: metaDescription
        },
        {
          property: 'og:description',
          content: metaDescription
        }
      ]
    }
  },
  {
    path: '/step/:step?',
    name: 'step',
    component: Step,
    meta: {
      title: 'Stap | Beslismodel auteursrechten | Regel je rechten',
      metaTags: [
        {
          name: 'description',
          content: metaDescription
        },
        {
          property: 'og:description',
          content: metaDescription
        }
      ]
    }
  },
  { // catch all 404 - define at the very end
    path: '*',
    name: 'notfound',
    component: NotFound,
    meta: {
      title: '404 | Beslismodel auteursrechten | Regel je rechten',
      metaTags: [
        {
          name: 'description',
          content: metaDescription
        },
        {
          property: 'og:description',
          content: metaDescription
        }
      ]
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
  to.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');
    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });
    tag.setAttribute('data-vue-router-controlled', '');
    return tag;
  }).forEach(tag => document.head.appendChild(tag));

  next();
});

export default router;
