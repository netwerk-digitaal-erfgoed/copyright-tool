<template>
  <div id="app">
    <CookieBanner />
    <header class="container">
      <router-link to="/" class="logo" aria-label="Digitaalerfgoedcoach.Online">
        <img src="/assets/digitaal_erfgoed_coach_online-LOGO.png" alt="Digitaalerfgoedcoach.Online" width="200" height="80"/>
      </router-link>
      <div class="title">
        <a
          tabindex="0"
          @click="goToHome"
          @keyup.enter="goToHome"
        >
          Regel je rechten: Beslismodel auteursrechten
        </a>
      </div>
    </header>
    <main>
      <RouterView :key="$route.fullPath" />
    </main>
    <footer>
      <MainNavigation />
    </footer>
  </div>
</template>

<script>
  import MainNavigation from './components/MainNavigation.vue';
  import CookieBanner from './components/CookieBanner.vue';

  import { useHead } from '@vueuse/head';

  const metaDescription = 'Erfgoedcollecties zijn vaak omvangrijk en divers. Het is niet altijd duidelijk of een werk nog auteursrechtelijk beschermd is en bij wie de auteursrechten liggen. Dit beslismodel helpt je de juiste stappen te nemen om de rechten situatie van een bepaald collectie onderdeel vast te stellen.';

  export default {
    components: {
      MainNavigation,
      CookieBanner
    },

    methods: {
      goToHome() {
        this.$store.dispatch('clearSelectedSteps');
        return this.$router.push({ path: '/' });
      }
    },

    setup() {
      useHead({
        title: 'Beslismodel auteursrechten | Regel je rechten',
        titleTemplate: '%s | Beslismodel auteursrechten | Regel je rechten',
        meta: [
          { name: 'description', content: metaDescription },
          { name: 'og:description', content: metaDescription }
        ],
        htmlAttrs: {
          lang: 'nl'
        }
      });
    }
  };
</script>

<style lang="scss">
  @use "./design";
</style>
