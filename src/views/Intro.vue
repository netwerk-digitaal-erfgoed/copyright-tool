<template>
<div
    class="container"
  >
    <div class="column-text">
      <div class="container container-small">
        <h1>Introductie</h1>
        <p>Erfgoedcollecties zijn vaak omvangrijk en divers. Het is niet altijd meteen duidelijk of een werk nog auteursrechtelijk beschermd is. Of  bij wie de auteursrechten liggen. Toch moet je dat weten als je een collectie bijvoorbeeld online wilt zetten - je moet dan afspraken maken met de rechthebbenden.</p>
        
        <p>Met het beslismodel Regeljerechten.nl, ontwikkeld binnen het Netwerk Digitaal Erfgoed, bepaal je stap voor stap de rechtenstatus van een specifiek werk in de collectie. Welke keuzes je vervolgens maakt, kan per instelling verschillen.</p>

        <p>Om de vragen in dit beslismodel te beantwoorden, heb je informatie over het werk nodig. Soms is een klein beetje informatie al genoeg om de auteursrechtelijke status te bepalen van een werk. In andere gevallen is eerst meer onderzoek nodig. Pas daarna kun je de vragen in dit beslismodel goed beantwoorden.</p>

        <p><a href="./handleiding" target="_blank">Hier vind je een handleiding voor gebruik van het beslismodel</a>, en als je wilt weten <router-link to="/copyright">wat auteursrecht ook alweer is dan vind je dat hier.</router-link></p>
   
        <div class="buttons">
          <button @click="startTree" class="btn">Start het beslismodel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { useHead } from '@vueuse/head';

  export default {
    methods: {
      startTree() {
        this.$store.dispatch('clearSelectedSteps');
        return this.$router.push({ path: '/step' }).then(() => window.scrollTo(0, 0));
      }
    },

    created() {
      useHead({
        title: 'Intro'
      });
    }
  };
</script>
