<template>
    <div
      class="container"
    >
      <div class="column-result">
        <div class="container container-small padding-top-null">
        <h1>Handleiding</h1>
            <p>Met dit beslismodel kun je de auteursrechten op werken in collecties onderzoeken. Per werk doorloop je het model door vragen over het werk en de vervaardiger(s) te beantwoorden.</p>
            <p>Hoe meer informatie je beschikbaar hebt, hoe beter je het beslismodel kunt doorlopen. De uitkomst hangt natuurlijk af van de gegevens die je invoert, en&nbsp;er kunnen geen rechten aan worden ontleend.&nbsp;</p>
            <p>Het beslismodel bestaat uit drie opeenvolgende fases:</p>
            <ol>
                <li>Onderzoek of het werk nog beschermd wordt door auteursrecht.</li>
                <li>Zo ja, bepaal wie de rechthebbende is</li>
                <li>Vraag toestemming voor gebruik.</li>
            </ol>
            <h2>Verzamel gegevens over het werk en de vervaardiger</h2>
            <p>Om te bepalen hoe lang een werk beschermd blijft door het auteursrecht, heb je informatie nodig over het werk zelf en de maker. Bijvoorbeeld: is de maker een persoon of een organisatie? Zijn er meerdere makers bij betrokken? Leven ze nog of zijn ze overleden?</p>
            <p>Zorg dat je in elk geval dezel basisgegevens bij de hand hebt voordat je begint, zoals de naam van de vervaardiger(s) en de (eventuele) overlijdensdatum.</p>
            <p>Tijdens het doorlopen van het beslismodel kan het zijn dat je meer specifieke informatie nodig hebt om bepaalde vragen te beantwoorden,. Neem dan rustig de tijd om deze gegevens op te zoeken.</p>
            <h2>Waar vind je informatie</h2>
            <p>Er zijn verschillende bronnen waar je informatie over het werk en de vervaardiger kunt vinden.</p>
            <h3>Algemeen:</h3>
            <ul>
                <li>De eigen collectiedatabase (indien van toepassing)</li>
                <li>Nederlands Instituut voor Kunstgeschiedenis (RKD)</li>
                <li>Wikimedia Commons</li>
                <li>Google of een andere zoekmachine</li>
            </ul>
            <h3>Voor audiovisueel materiaal en films:</h3>
            <ul>
                <li>Beeld en Geluid</li>
                <li>EYE Filmmuseum</li>
                <li>Jaarboeken Nederlands Filmfonds</li>
            </ul>
            <h3>Voor boeken en tekstpublicaties:</h3>
            <ul>
                <li>Koninklijke Bibliotheek</li>
                <li>Virtual International Authority File</li>
            </ul>
            <h3>Voor (overlijdens)data/erfgenamen:</h3>
            <ul>
                <li>Delpher</li>
                <li>Centrum voor Familiegeschiedenis (CBG)</li>
            </ul>

          <div class="buttons">
            <router-link to="/" tag="button" class="btn">
              Terug naar de homepagina
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
  import { useHead } from '@vueuse/head';

  export default {
    created() {
      useHead({
        title: 'Handleiding'
      });
    }
  };
</script>