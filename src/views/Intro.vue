<template>
<div
    class="container columns-2"
  >
    <div class="column-sidebar" />
    <div class="column-text">
      <div class="container container-small padding-null">
        <h1>Beslismodel auteursrechten</h1>
        <p>Erfgoedcollecties zijn vaak omvangrijk en divers. Het is niet altijd duidelijk of een werk nog auteursrechtelijk beschermd is en bij wie vervolgens de auteursrechten liggen, ten behoeve het maken van afspraken met rechthebbenden. Dit beslismodel helpt je de juiste stappen in je onderzoek te nemen voor verschillende typen werken. Het model is een handvat voor het in kaart brengen van de situatie, welke keuzes je vervolgens maakt kan per instelling verschillen.
        </p>

        <p>Om de vragen in het beslismodel te kunnen beantwoorden, is informatie over het werk nodig. Soms kan je met minimale informatie al snel een sluitend antwoord krijgen op de auteursrechtenstatus van het werk. Bij meer complexe situaties zal het model je vragen om nader onderzoek te doen en hier handvatten voor geven.
        </p>

        <button @click="showExplanation" class="readmore">Toelichting</button>

        <div class="buttons">
          <router-link to="/step" tag="button">Begin</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      showExplanation() {
        this.$modal.show(
          { template: `<div class="modal-content">
              <p>Een ieder die iets unieks en oorspronkelijks creëert, krijgt auteursrechten op ‘het werk’ dat is ontstaan. Het eigendom van het fysieke werk kan vervolgens worden overgedragen of doorverkocht, aan een consument, museum of archief, maar de auteursrechten blijven bij de (geestelijk) schepper van het werk. In beginsel is de maker dus de auteursrechthebbende.</p>

              <p>Auteursrechten omvatten het alleenrecht om te mogen bepalen of het werk openbaar gemaakt mag worden, bijvoorbeeld publicatie in een blad of op een website. En of het werk vermenigvuldigd mag worden, bijvoorbeeld door posters van een foto te maken, of door een film uit te brengen op dvd. De toestemming die de rechthebbende aan derden geeft voor dit gebruik heet een licentie, daarin staan ook vaak afspraken over een vergoeding en over de omvang van het gebruik. Om een werk te kunnen gebruiken moeten er dus afspraken met de rechthebbende(n) worden gemaakt. </p>

              <p>Wie de auteursrechthebbende op een werk is, verschilt per type werk en kan door de loop der tijd ook veranderen. Auteursrechten vervallen pas na 70 jaar na de dood van de maker. De kans is dus groot dat de auteursrechten van de maker ondertussen bij erfgenamen liggen. Anderszins kunnen auteursrechten ook zijn overgedragen aan een stichting of andere organisatie, of zijn verkocht. Films vormen hierop een uitzondering, daar is een vermoeden van overdracht aan de producent door alle individuele makers, met uitzondering van de filmmuziek. </p>

              <p>De auteurswet beschermt de rechthebbende van een werk, maar heeft ook een aantal uitzonderingen opgenomen om tegemoet aan het algemeen belang. Zo hoeven er geen afspraken gemaakt te worden met de rechthebbende voor gebruik in het onderwijs. Of publicatie in een krant wanneer er een recensie over het werk wordt geschreven. </p>
            </div>
          `
          },
          {},
          { name: 'explanation', height: 'auto', width: '60%', scrollable: true });
      }
    }
  };
</script>
