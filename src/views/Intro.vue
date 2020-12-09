<template>
<div
    class="container"
  >
    <div class="column-text">
      <div class="container container-small padding-null">
        <div class="card bg-white">
          <h2>Voorbehoud</h2>
          <p>Dit de bètaversie van het beslismodel auteursrechten. Het projectteam heeft zich ingespannen om juridische overwegingen te verenigen met bedieningsgemak. Het is echter mogelijk dat dit beslismodel nog hiaten, onduidelijkheden of andere kinderziekten bevat. Aanbevolen wordt om hiermee rekening te houden bij het toepassen van de verstrekte adviezen.</p>

          <p>We nodigen je echter van harte uit om het beslismodel te gebruiken, en eventele vragen en suggesties te delen via het <a href="https://forms.gle/oyoHNmxcvG9hpCAD9" target="_blank">feedbackformulier</a>. Aan de hand van deze feedback zullen de komende tijd verbeterde versies worden gepubliceerd.</p>
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
    }
  };
</script>


