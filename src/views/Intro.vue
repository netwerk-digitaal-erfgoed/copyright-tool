<template>
<div
    class="container"
  >
    <div class="column-text">
      <div class="container container-small padding-null">
        <h1>Introductie</h1>
        <p>Erfgoedcollecties zijn vaak omvangrijk en divers. Het is niet altijd duidelijk of een werk nog auteursrechtelijk beschermd is en bij wie vervolgens de auteursrechten liggen, ten behoeve van het maken van afspraken met rechthebbenden. Dit beslismodel helpt je de juiste stappen in het onderzoek te nemen voor verschillende typen werken. Het model is een handvat voor het in kaart brengen van de rechtensituatie, welke keuzes je vervolgens maakt kan per instelling verschillen.
        </p>

        <p>Om de vragen in het beslismodel te kunnen beantwoorden, is informatie over het werk nodig. Soms kan je met minimale informatie al snel een sluitend antwoord krijgen op de auteursrechtenstatus van het werk. Bij meer complexe situaties is het nodig om eerst verder onderzoek te doen om de vragen in de tool te kunnen beantwoorden.
        </p>

        <p><a href="./assets/handleiding-beslismodel-auteursrechten.pdf" target="_blank">Hier vind je een handleiding voor gebruik van de tool</a>, en als je wilt weten <router-link to="/copyright">wat auteursrechten ook alweer zijn dan vind je dat hier.</router-link></p>

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


