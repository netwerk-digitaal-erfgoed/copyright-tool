<template>
  <div
    class="container"
  >
    <div class="column-result">
      <div class="container container-small padding-top-null">
        <h1>Colofon &amp; disclaimer</h1>
        <p>Deze beta versie van het beslismodel auteursrechten is in 2020 ontwikkeld binnen het Netwerk Digitaal Erfgoed in samenwerking met juridische deskundigen van de Koninklijke Bibliotheek, Utrechts Archief, Erfgoed Leiden en Omstreken, Rijksdienst voor Cultureel Erfgoed, Nederlands Instituut voor Beeld en Geluid, Eye Filmmuseum en DEN Kennisinstituut Cultuur &amp; Digitale Transformatie. Sezen Kapan heeft meegewerkt als auteursrecht jurist en projectmedewerker.</p>

        <p>Het beslismodel is een hulpmiddel bij het uitzoeken en clearen van auteursrechten op werken in collecties. Aan de uitkomsten kunnen geen rechten ontleend worden en we willen de gebruikers er dan ook op wijzen dat ze zelf verantwoordelijk blijven voor het op een juiste manier regelen van de rechten.</p>

        <p>Wanneer je onze website gebruikt, ga je akkoord met de voorwaarden zoals in de <a href="https://www.den.nl/gebruikersvoorwaarden-van-den" target="_blank">gebruikersvoorwaarden</a> beschreven. Wij hechten waarde aan jouw privacy en gaan zorgvuldig om met je gegevens. In onze <a href="https://www.den.nl/privacy-statement-van-den" target="_blank">verklaring</a> lees je welke gegevens we verwerken en met welk doel.</p>

        <h2>Feedback</h2>

        <p>
        Het beslismodel wordt beheerd door DEN en zal ook de komende tijd worden verbeterd. Hiervoor hebben we een <a href="https://forms.gle/oyoHNmxcvG9hpCAD9" target="_blank">feedbackformulier</a> gemaakt waarin je kunt aangeven of je tegen problemen aanloopt of ruimte voor verbetering ziet. Dit formulier is anoniem: we verzamelen geen persoonsgegevens. Mocht je op persoonlijke titel feedback willen geven of heb je andere vragen, dan kun je een mailtje sturen naar <a href="mailto: den@den.nl">den@den.nl</a>.
        </p>

        <h2>Technische details</h2>

        <p>
        Het beslismodel auteursrechten is een open source project en ontwikkeld door Mirjam Verloop in JavaScript met behulp van het Vue framework. De code is beschikbaar via <a href="https://github.com/netwerk-digitaal-erfgoed/copyright-tool">Github</a> en gepubliceerd onder de <a href="https://github.com/netwerk-digitaal-erfgoed/copyright-tool/blob/master/LICENSE.md">EUPL v1.2 licentie</a>. </p>

        <p>Het beslismodel is getest in de meest recente versies van Chrome, Firefox, Edge en Safari. Daarnaast is het beslismodel met behulp van Axe getoetst op de WCAG 2.1 toegankelijkheidsrichtlijnen.</p>
        <br><br>

        <div class="buttons">
          <router-link to="/" @click.native="scrollToTop" tag="button" class="btn">
            Terug naar de homepagina
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    metaInfo() {
      return {
        title: 'Colofon'
      };
    },

    methods: {
      scrollToTop() {
        window.scrollTo(0, 0);
      }
    }
  };
</script>
