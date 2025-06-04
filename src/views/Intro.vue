<template>
<div
    class="container"
  >
    <div class="column-text">
      <div class="container container-small">
        <!--<div class="card bg-lightblue">
          <h2>Voorbehoud</h2>
          <p>Dit is de bètaversie van het beslismodel auteursrechten. Het projectteam heeft zich ingespannen om juridische overwegingen te verenigen met bedieningsgemak. Het is echter mogelijk dat dit beslismodel nog hiaten, onduidelijkheden of andere kinderziekten bevat.</p>

          <p>We nodigen je van harte uit om dit beslismodel te gebruiken, onder het voorbehoud dat aan de uitkomsten geen rechten kunnen worden ontleend.
          <router-link to="/colofon">Lees meer over dit voorbehoud en de gebruiksvoorwaarden in het colofon en disclaimer</router-link>.</p>

          <p>Help jij ons met het verbeteren van dit beslismodel? Wij zijn benieuwd hoe je het gebruik van dit beslismodel ervaart. Wij nodigen je, nu of na het doorlopen van het beslismodel, uit om deel te nemen aan een kort anoniem <a href="https://forms.gle/oyoHNmxcvG9hpCAD9" target="_blank">onderzoek</a>.</p>
        </div>-->

        <h1>Introductie</h1>
        <p>Erfgoedcollecties zijn vaak omvangrijk en divers. Het is niet altijd meteen duidelijk of een werk nog auteursrechtelijk beschermd is. Of  bij wie de auteursrechten liggen. Toch moet je dat weten als je een collectie bijvoorbeeld online wilt zetten - je moet dan afspraken maken met de rechthebbenden.</p>
        
        <p>Met het beslismodel Regeljerechten.nl, ontwikkeld binnen het Netwerk Digitaal Erfgoed, bepaal je stap voor stap de rechtenstatus van een specifiek werk in de collectie. Welke keuzes je vervolgens maakt, kan per instelling verschillen.</p>

        <p>Om de vragen in dit beslismodel te beantwoorden, heb je informatie over het werk nodig. Soms is een klein beetje informatie al genoeg om de auteursrechtelijke status te bepalen van een werk. In andere gevallen is eerst meer onderzoek nodig. Pas daarna kun je de vragen in dit beslismodel goed beantwoorden.</p>

        <p><a href="./handleiding" target="_blank">Hier vind je een handleiding voor gebruik van het beslismodel</a>, en als je wilt weten <router-link to="/copyright">wat auteursrecht ook alweer is dan vind je dat hier.</router-link></p>
        <br><br>

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
