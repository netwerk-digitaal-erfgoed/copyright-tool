<template>
  <div
    v-if="showCookieBanner"
    class="cookie-banner"
  >
    <div class="cookie-banner-text">
      <div>
        Wanneer je de website van DEN gebruikt, ga je akkoord met de voorwaarden zoals in de <a href="https://www.den.nl/over-ons/gebruikersvoorwaarden"  target="_blank">gebruikersvoorwaarden</a> beschreven. Deze website maakt gebruik van cookies voor het anoniem meten van het websitebezoek en het vergroten van het gebruiksgemak. Door op 'accepteren' te klikken, geef je toestemming voor het gebruik van deze cookies. Meer over <a             href="https://www.den.nl/over-ons/cookies" target="_blank">cookies</a> en <a href="https://www.den.nl/privacy" target="_blank">privacy</a>.
      </div>
    </div>
    <div class="cookie-banner-buttons">
      <button
        class="btn btn-link"
        @click="declineCookies"
        aria-label="Cookies afwijzen"
      >
        Afwijzen
      </button>
      <button
        class="btn"
        @click="acceptCookies"
        aria-label="Cookies accepteren"
      >
        Accepteren
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CookieBanner',

    data() {
      return {
        showCookieBanner: true
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
          this.acceptCookies();
        } else if (cookie.split('=')[1] === 'declined') {
          this.declineCookies();
        }
      }
    },

    methods: {
      declineCookies() {
        this.$gtag.optOut();
        document.cookie = `DEN-regeljerechten=declined;${this.cookieExpirationDate}`;
        this.showCookieBanner = false;
      },
      acceptCookies() {
        this.$gtag.optIn();
        document.cookie = `DEN-regeljerechten=accepted;${this.cookieExpirationDate}`;
        this.showCookieBanner = false;
      }
    }
  };
</script>
