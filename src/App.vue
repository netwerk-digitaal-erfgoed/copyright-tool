<template>
  <div id="app">
    <CookieBanner />
    <header class="container">
      <router-link to="/" class="logo" aria-label="DEN kennisinstuut cultuur en digitale transformatie">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 166 42" class="Navigation-logoSvg">
          <path fill="#38001e" d="M20.192 41.964c6.644 0 11.91-1.902 15.803-5.734 3.893-3.804 5.824-8.897 5.824-15.248 0-6.35-1.931-11.413-5.824-15.247C32.103 1.903 26.836 0 20.192 0H0v41.964h20.192ZM9.951 8.81h10.068c3.834 0 6.76 1.083 8.75 3.249 1.99 2.165 2.986 5.15 2.986 8.926 0 7.61-4.038 12.175-11.734 12.175H9.95V8.809ZM119.923 0H45.316v41.964h74.605v-8.75H55.267v-8.165h60.69v-7.786h-60.69V8.751h64.656V0Zm13.914 41.964V16.857l-.058-5.327h.586l18.115 30.436h12.876V0h-9.951v25.137l.059 5.327h-.586L136.764 0h-12.875v41.964h9.95-.002Z"></path></svg>
      </router-link>
      <div class="title">
        <a
          tabindex="0"
          @click="goToHome"
          @keyup.enter="goToHome"
        >
          <strong>Regel je rechten</strong> <span>Beslismodel auteursrechten</span>
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

    metaInfo() {
      return {
        title: 'Beslismodel auteursrechten | Regel je rechten',
        titleTemplate: '%s | Beslismodel auteursrechten | Regel je rechten',
        htmlAttrs: {
          lang: 'nl'
        },
        meta: [
          { name: 'description', content: metaDescription },
          { name: 'og:description', content: metaDescription }
        ]
      };
    }
  };
</script>

<style lang="scss">
  @import "~normalize.css/normalize.css";
  @import "./design";
</style>
