<template>
  <div id="app">
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
      <MainNavigation />
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

  export default {
    components: {
      MainNavigation
    },

    methods: {
      goToHome() {
        this.$store.dispatch('clearSelectedSteps');
        return this.$router.push({ path: '/' });
      }
    }
  };
</script>

<style lang="scss">
  @import "~normalize.css/normalize.css";
  @import "./design";
</style>
