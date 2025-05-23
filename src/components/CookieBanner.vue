<template>
  <div
    v-if="showCookieBanner"
    class="cookie-banner"
  >
    <div class="cookie-banner-text">
      <div>
        Wij gebruiken cookies om ervoor te zorgen dat je onze site met plezier kunt gebruiken, jouw surfgedrag te meten en om je zo nu en dan relevante advertenties aan te bieden. Meer over <a href="https://www.den.nl/over-ons/cookies" target="_blank" rel="noopener">cookies</a> en <a href="https://www.den.nl/privacy" target="_blank" rel="noopener">privacy</a>.
      </div>
    </div>
    <div class="cookie-banner-buttons">
      <button
        class="btn btn-outline"
        @click="declineCookies(false)"
        aria-label="Cookies afwijzen"
      >
        Afwijzen
      </button>
      <button
        class="btn"
        @click="acceptCookies(false)"
        aria-label="Cookies accepteren"
      >
        Accepteren
      </button>
    </div>
  </div>
</template>

<script>
  //import { useGtag } from 'vue-gtag-next';

  export default {
    name: 'CookieBanner',
    data() {
      return {
        showCookieBanner: false
      };
    },
    computed: {
      cookieExpirationDate() {
        const d = new Date();
        d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
        return 'expires=' + d.toUTCString();
      }
    },
    created() {
      const cookie = document.cookie.split('; ').find(row => row.startsWith('DEN-regeljerechten='));
      if (cookie) {
        if (cookie.split('=')[1] === 'accepted') {
          this.acceptCookies(true);
        } else if (cookie.split('=')[1] === 'declined') {
          this.declineCookies(true);
        }
      } else {
        this.showCookieBanner = true;
      }
    },
    methods: {
      declineCookies(cookieIsSet) {
        //const gtag = useGtag();
        //gtag.optOut();
        this.showCookieBanner = false;
        if (!cookieIsSet) {
          document.cookie = `DEN-regeljerechten=declined;${this.cookieExpirationDate}`;
        }
      },
      acceptCookies(cookieIsSet) {
        //const gtag = useGtag();
        //gtag.optIn();
        this.showCookieBanner = false;
        if (!cookieIsSet) {
          document.cookie = `DEN-regeljerechten=accepted;${this.cookieExpirationDate}`;
        }
      }
    }
  };
</script>
