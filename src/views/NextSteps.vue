<template>
  <div
    class="container columns-2"
  >
    <div class="column-sidebar" />
    <div class="column-text">
      <div class="container container-small padding-null">
        <h1>Handelingsperspectief</h1>
        <p>Wanneer je de auteursrechtenstatus van een bepaald werk weet, en dat je afspraken moet maken met de rechthebbende, kan onderstaande Q&amp;A je verder helpen met de vraag “hoe doe ik dat dan?”. Onderstaande links bieden een handelingsperspectief, dat zowel betrekking heeft op de juridische aspecten als beleidsmatige keuzes van een organisatie. De focus ligt op online publicatie.</p>
        <div class="faq-accordion">
          <div
            v-for="(faq, index) in faqItems"
            :key="index"
            :class="{ 'faq-active': activeTab === index }"
          >
            <div
              class="faq-accordion-heading"
              @click="setActiveTab(index)"
            >{{ faq.title }}</div>
            <div class="faq-accordion-content" v-html="faq.value" />
          </div>
        </div>
        <div class="buttons">
          <button type="button" v-on:click="resetTree">
            Start opnieuw
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeTab: 0,
        faqItems: [
          {
            title: 'Hoe maak ik afspraken met rechthebbenden?',
            value: '<a href="https://www.den.nl/aan-de-slag/uitvoeren/hoe-regel-je-de-rechten" target="_blank">Hoe regel je de rechten?</a>'
          },
          {
            title: 'Wat voor een soort afspraken moet ik maken?',
            value: '<a href="https://www.den.nl/aan-de-slag/uitvoeren/hoe-regel-je-de-rechten/beheer-en-licenties" target="_blank">Licenties</a>'
          },
          {
            title: 'Welke licenties kan ik gebruiken als ik mijn materiaal online wil publiceren?',
            value: `<ul>
              <li>
                <a href="https://www.den.nl/aan-de-slag/uitvoeren/hoe-regel-je-de-rechten/beheer-en-licenties" target="_blank">Licenties</a>
              </li>
              <li>
                <a href="https://www.den.nl/publications/231/stimuleer-het-gebruik-van-je-werk-met-creative-commons" target="_blank">
                  Stimuleer het gebruik van je werk met Creative Commons
                </a>
              </li>
              <li>
                <a href="https://rightsstatements.org/en/" target="_blank">RightsStatements.org</a>
              </li>
            </ul>`
          },
          {
            title: 'Voor hoe lang zijn de afspraken geldig?',
            value: '<a href="https://www.den.nl/aan-de-slag/uitvoeren/hoe-regel-je-de-rechten/beheer-en-licenties" target="_blank">Licenties</a>'
          },
          {
            title: 'Wat moet ik doen als meerdere mensen rechthebbenden zijn?',
            value: `<a href="https://www.den.nl/aan-de-slag/uitvoeren/hoe-regel-je-de-rechten/stappenplan " target="_blank">
              Stappenplan: regel in drie stappen je rechten
            </a>`
          },
          {
            title: 'Wat als ik geen toestemming van de rechthebbende(n) krijg?',
            value: `<a href="https://www.den.nl/aan-de-slag/uitvoeren/hoe-regel-je-de-rechten/stappenplan " target="_blank">
              Stappenplan: regel in drie stappen je rechten
            </a>`
          },
          {
            title: 'Waar vind ik informatie over verweesde werken?',
            value: `<ul>
              <li>
                <a href="https://www.cultureelerfgoed.nl/onderwerpen/verweesde-werken" target="_blank">Verweesde werken</a>
              </li>
              <li>
                <a href="https://www.cultureelerfgoed.nl/onderwerpen/verweesde-werken/stappenplan-vaststellen-verweesd-werk" target="_blank">
                  Stappenplan vaststellen verweesd werk
                </a>
              </li>
            </ul>`
          },
          {
            title: 'Algemene bronnenlijst',
            value: `
            <p>Als je meer wilt weten over dit onderwerp, dan kan je de volgende bronnen raadplegen.</p>
            <ul>
              <li>
                <a href="https://openaccess.leidenuniv.nl/bitstream/handle/1887/19552/JuridischeWegwijzer%20Archieven%20Musea%20online%202006.pdf?sequence=2 " target="_blank">
                Juridische wegwijzer door Annemarie Beunen
                </a>
              </li>
              <li>
                <a href="https://www.beeldengeluid.nl/kennis/kennisthemas/gebruikers/auteursrecht" target="_blank">
                  Beeld en geluid
                </a>
              </li>
              <li>
                <a href="https://www.avanet.nl/kennisthemas/gebruikers/" target="_blank">
                   AVA_Net
                </a>
              </li>
              <li>
                <a href="https://www.cultureelerfgoed.nl/onderwerpen/bruiklenen/auteursrecht" target="_blank">
                   RCE
                </a>
              </li>
              <li>
                <a href="https://www.den.nl/themas/rechten-juridisch" target="_blank">
                   DEN
                </a>
              </li>
              <li>
                <a href="https://www.den.nl/themas/rechten-juridisch" target="_blank">
                   DEN
                </a>
              </li>
              <li>
                <a href="https://rightsstatements.org/en/" target="_blank">
                   RightsStatements
                </a>
              </li>
            </ul>
            <p>Let op, niet alleen auteursrechten bepalen of je een werk mag tonen. Er zijn nog een aantal andere aspecten waarmee je rekening moet houden bij publicatie:
            </p>
            <ul>
              <li>Als iemand is geportretteerd, dan moet je misschien ook toestemming van de geportretteerde vragen.</li>
              <li>Houdt rekening met de AVG (Algemene verordening gegevensverwerking) in het geval een werk iemand persoonsgegevens bevat.</li>
              <li>Er kunnen ethische bezwaren zijn om een werk te publiceren.</li>
            </ul>
            `
          }
        ]
      };
    },

    methods: {
      resetTree() {
        this.$store.dispatch('clearSelectedSteps');
        return this.$router.push({ path: '/step' });
      },

      setActiveTab(index) {
        this.activeTab = index;
      }
    }
  };
</script>
