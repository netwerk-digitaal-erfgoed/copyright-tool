<template>
  <div id="app" class="page-container">
    <CookieBanner />
    <header>
      <div class="title">
        <a
          tabindex="0"
          @click="goToHome"
          @keyup.enter="goToHome"
        >
          <strong>Regel je rechten</strong> <span>Beslismodel auteursrechten</span> <span class="beta">BETA</span>
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
