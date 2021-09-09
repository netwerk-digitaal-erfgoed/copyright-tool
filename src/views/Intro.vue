<template>
<div
    class="container"
  >
    <div class="column-text">
      <div class="container container-small padding-null">
        <div class="card bg-white">
          <h2>Voorbehoud</h2>
          <p>Dit is de bètaversie van het beslismodel auteursrechten. Het projectteam heeft zich ingespannen om juridische overwegingen te verenigen met bedieningsgemak. Het is echter mogelijk dat dit beslismodel nog hiaten, onduidelijkheden of andere kinderziekten bevat.</p>

          <p>We nodigen je van harte uit om dit beslismodel te gebruiken, onder het voorbehoud dat aan de uitkomsten geen rechten kunnen worden ontleend.
          <router-link to="/colofon">Lees meer over dit voorbehoud en de gebruiksvoorwaarden in het colofon en disclaimer</router-link>.</p>

          <p>Help jij ons met het verbeteren van dit beslismodel? Wij zijn benieuwd hoe je het gebruik van dit beslismodel ervaart. Wij nodigen je, nu of na het doorlopen van het beslismodel, uit om deel te nemen aan een kort anoniem <a href="https://forms.gle/oyoHNmxcvG9hpCAD9" target="_blank">onderzoek</a>.</p>
        </div>

        <h1>Introductie</h1>
        <p>Erfgoedcollecties zijn vaak omvangrijk en divers. Het is niet altijd duidelijk of een werk nog auteursrechtelijk beschermd is en bij wie de auteursrechten liggen. Dat moet je wel weten als je een collectie bijvoorbeeld online wil zetten, omdat je daarover afspraken met de rechthebbenden moet maken. Dit beslismodel helpt je de juiste stappen te nemen om de rechten situatie van een bepaald collectie onderdeel vast te stellen. Welke keuzes je vervolgens maakt kan per instelling verschillen.</p>

        <p>Om de vragen in dit beslismodel te kunnen beantwoorden, is informatie over het werk nodig. Soms kun je met minimale informatie al snel de auteursrechtstatus vaststellen van het werk: is het nog beschermd of niet? Bij complexere situaties is het nodig om eerst verder onderzoek te doen om de vragen in dit beslismodel te kunnen beantwoorden.</p>

        <p><a href="./assets/handleiding-beslismodel-auteursrechten.pdf" target="_blank">Hier vind je een handleiding voor gebruik van het beslismodel</a>, en als je wilt weten <router-link to="/copyright">wat auteursrecht ook alweer is dan vind je dat hier.</router-link></p>
        <br><br>

        <div class="buttons">
          <button @click="startTree">Start het beslismodel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      startTree() {
        this.$store.dispatch('clearSelectedSteps');
        return this.$router.push({ path: '/step' }).then(() => window.scrollTo(0, 0));
      }
    },

    metaInfo() {
      return {
        title: 'Intro'
      };
    }
  };
</script>
