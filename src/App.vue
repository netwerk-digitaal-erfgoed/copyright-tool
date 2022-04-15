<template>
  <div id="app">
    <CookieBanner />
    <header class="container">
      <router-link to="/" class="logo" aria-label="DEN kennisinstuut cultuur en digitale transformatie">
        <svg
          width="123px"
          height="50px"
          viewBox="0 0 123 50"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <polygon
              points="0 0.0813909774 37.2979323 0.0813909774 37.2979323 49.8119925 0 49.8119925"
            />
          </defs>
          <g
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g>
              <g transform="translate(0.000000, 0.106579)">
                <mask fill="white"><use xlink:href="#path-1" /></mask>
                <path
                  d="M18.6490602,44.483797 C11.2922932,44.483797 5.32838346,38.5196992 5.32838346,31.1629323 C5.32838346,23.8061654 11.2922932,17.8424436 18.6490602,17.8424436 C26.0058271,17.8424436 31.9697368,23.8061654 31.9697368,31.1629323 C31.9697368,38.5196992 26.0058271,44.483797 18.6490602,44.483797 Z M31.9697368,18.1133083 C28.5847744,14.658609 23.8676692,12.5140602 18.6490602,12.5140602 C8.34962406,12.5140602 0,20.8634962 0,31.1629323 C0,41.4625564 8.34962406,49.8119925 18.6490602,49.8119925 C23.8676692,49.8119925 28.5847744,47.6674436 31.9697368,44.2127444 L31.9697368,49.8119925 L37.2979323,49.8119925 L37.2979323,0.0813533835 L31.9697368,0.0813533835 L31.9697368,18.1133083 Z"
                  fill="#00326E"
                  mask="url(#mask-2)"
                />
              </g>
              <path
                d="M103.901598,12.6206203 C93.6021617,12.6206203 85.2525376,20.9700564 85.2525376,31.2694925 L85.2525376,49.9185526 L90.5807331,49.9185526 L90.5807331,31.2694925 L90.5809211,31.2694925 C90.5809211,23.9127256 96.5448308,17.9490038 103.901598,17.9490038 C111.258365,17.9490038 117.222462,23.9127256 117.222462,31.2694925 L117.222274,31.2694925 L117.222274,49.9185526 L122.55047,49.9185526 L122.55047,31.2694925 C122.55047,20.9700564 114.201034,12.6206203 103.901598,12.6206203"
                fill="#00326E"
              />
              <path
                d="M61.275282,12.6206203 C50.9758459,12.6206203 42.6262218,20.9700564 42.6262218,31.2694925 C42.6262218,41.5691165 50.9758459,49.9185526 61.275282,49.9185526 C67.9651316,49.9185526 73.831297,46.3952444 77.1220865,41.103703 L72.2057331,38.8792669 C69.7987782,42.3303947 65.8019737,44.5903571 61.275282,44.5903571 C54.8281015,44.5903571 49.4512218,40.009718 48.2200188,33.9253195 C48.1335526,33.497688 48.0671992,33.0629135 48.0226504,32.6215602 C48.0194549,32.5899812 48.0183271,32.5576504 48.0153195,32.5258835 C47.9974624,32.335282 47.981485,32.1439286 47.9717105,31.9512594 C47.9604323,31.7255075 47.9546053,31.4982519 47.9546053,31.2694925 C47.9546053,31.041109 47.9604323,30.8138534 47.9717105,30.5881015 C47.9820489,30.3860338 47.9982143,30.1856579 48.0173872,29.9860338 C48.0194549,29.9634774 48.0202068,29.9405451 48.0226504,29.9178008 C48.0670113,29.4773872 48.1331767,29.0433647 48.2194549,28.6166729 C49.4495301,22.5311466 54.8269737,17.9490038 61.275282,17.9490038 C67.7196429,17.9490038 73.0946429,22.5251316 74.3290414,28.6053947 L53.7393797,28.6053947 C53.4446429,29.4390414 53.2828008,30.335094 53.2828008,31.2694925 C53.2828008,32.2040789 53.4446429,33.1003195 53.7393797,33.9337782 L74.3290414,33.9337782 L79.7339286,33.9337782 C79.8585526,33.0634774 79.9243421,32.1741917 79.9243421,31.2694925 C79.9243421,20.9700564 71.574906,12.6206203 61.275282,12.6206203"
                fill="#00326E"
              />
            </g>
          </g>
        </svg>
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
