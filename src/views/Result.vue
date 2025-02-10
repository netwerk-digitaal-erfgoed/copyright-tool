<template>
  <div
    class="container"
  >
    <div
      v-if="result"
      class="column-text"
    >
      <StepsProgress
        current-theme="Advies"
      />
      <div class="container container-small padding-null">
        <h1>Advies</h1>
        <template v-if="multipleComponents.length > 0">
          <h2>Componenten</h2>
          <div class="accordion">
            <div
              v-for="(component, index) in multipleComponents"
              :key="index"
            >
              <div class="panel-heading">{{ index + 1 }}. {{ component.name }}</div>
              <div class="panel">
                <div v-for="(paragraph, index) in component.result" :key="index">
                  <p v-html="paragraph" />
                </div>
                <ul v-if="component.steps.length > 0">
                  <li
                    v-for="(step, index) in component.steps"
                    :key="`sub-${index}`"
                  >
                    <strong>{{ getQuestionAnswerValues(step).question }}</strong><br>
                    {{ getQuestionAnswerValues(step).answer }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="buttons">
            <button
              v-if="isMultiple"
              type="button"
              v-on:click="addAnotherComponent"
              class="btn btn-small btn-secondary"
            >
              Voeg nog een component toe
            </button>
          </div>
          <br>
        </template>

        <template v-if="!isMultiple">
          <div v-for="(paragraph, index) in result" :key="index">
            <p v-html="paragraph" />
          </div>

          <div class="faq-accordion">
            <!-- Samenvatting -->
            <div
              :class="{ 'faq-active': activeTab === 'conclusion' }"
            >
              <a
                class="faq-accordion-heading"
                @click="setActiveTab('conclusion')"
                @keyup.enter="setActiveTab('conclusion')"
                @keyup.space="setActiveTab('conclusion')"
                tabindex="0"
              >
                Samenvatting
              </a>
              <div class="faq-accordion-content">
                <ul class="result-list">
                  <li
                    v-for="(step, index) in allSelected"
                    :key="index">
                      <strong>{{ getQuestionAnswerValues(step).question }}</strong><br>
                      {{ getQuestionAnswerValues(step).answer }}
                  </li>
                </ul>
              </div>
            </div>

            <!-- Verweesde werken -->
            <div
              v-if="orphaned"
              :class="{ 'faq-active': activeTab === 'orphaned' }"
            >
              <a
                class="faq-accordion-heading"
                @click="setActiveTab('orphaned')"
                @keyup.enter="setActiveTab('orphaned')"
                @keyup.space="setActiveTab('orphaned')"
                tabindex="0"
              >
                Verweesde werken
              </a>
              <div class="faq-accordion-content">
                <div v-for="(paragraph, index) in orphaned" :key="index">
                  <p v-html="paragraph" />
                </div>
              </div>
            </div>

            <!-- CBO -->
            <div
              v-if="cbo"
              :class="{ 'faq-active': activeTab === 'cbo' }"
            >
              <a
                class="faq-accordion-heading"
                @click="setActiveTab('cbo')"
                @keyup.enter="setActiveTab('cbo')"
                @keyup.space="setActiveTab('cbo')"
                tabindex="0"
              >
                CBO
              </a>
              <div class="faq-accordion-content">
                <div v-for="(paragraph, index) in cbo" :key="index">
                  <p v-html="paragraph" />
                </div>
              </div>
            </div>

            <!-- Let op -->
            <div
              v-if="note"
              :class="{ 'faq-active': activeTab === 'note' }"
            >
              <a
                class="faq-accordion-heading"
                @click="setActiveTab('note')"
                @keyup.enter="setActiveTab('note')"
                @keyup.space="setActiveTab('note')"
                tabindex="0"
              >
                Let op
              </a>
              <div class="faq-accordion-content">
                <div v-for="(paragraph, index) in note" :key="index">
                  <p v-html="paragraph" />
                </div>
              </div>
            </div>
          </div>
        </template>

        <template
          v-if="showNextSteps"
        >
          <h2>Vervolgstappen</h2>
          <p>Wanneer je de auteursrechtenstatus van een bepaald werk weet, en dat je afspraken moet maken met de rechthebbende, kan onderstaande Q&amp;A je verder helpen met de vraag “hoe doe ik dat dan?”. Onderstaande links bieden een handelingsperspectief, dat zowel betrekking heeft op de juridische aspecten als beleidsmatige keuzes van een organisatie. De focus ligt op online publicatie.</p>

          <div class="faq-accordion">
            <div
              v-for="(faq, index) in faqItems"
              :key="index"
              :class="{ 'faq-active': activeTab === index }"
            >
              <a
                class="faq-accordion-heading"
                @click="setActiveTab(index)"
                @keyup.enter="setActiveTab(index)"
                @keyup.space="setActiveTab(index)"
                tabindex="0"
              >{{ faq.title }}</a>
              <div class="faq-accordion-content" v-html="faq.value" />
            </div>
          </div>
        </template>

        <div class="buttons">
          <button @click="resetTree" class="btn btn-outline">Start opnieuw</button>
          <button @click="printResult" class="btn">Afdrukken</button>
        </div>
      </div>
    </div>
    <div
      v-else
      class="column-text"
    >
      <div class="container container-small padding-null">
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
  import { mapState } from 'vuex';
  import StepsProgress from '../components/StepsProgress.vue';

  export default {
    components: {
      StepsProgress
    },

    computed: {
      ...mapState(['allSelected', 'treeCopyright', 'result', 'orphaned', 'cbo', 'note', 'isMultiple', 'multipleComponents', 'showNextSteps'])
    },

    data() {
      return {
        activeTab: null,
        faqItems: [
          {
            title: 'Hoe maak ik afspraken met rechthebbenden of Collectieve Beheerorganisaties?',
            value: '<a href="https://www.den.nl/aan-de-slag/hoe-regel-je-de-rechten/beheer-en-licenties" target="_blank">Beheer en licenties</a> <span class="print-only">https://www.den.nl/aan-de-slag/hoe-regel-je-de-rechten/beheer-en-licenties</span>'
          },
          {
            title: 'Hoe kan ik het materiaal zelf online publiceren? Welke licenties kan ik gebruiken als ik mijn materiaal online wil publiceren?',
            value: `<ul>
              <li>
                <a href="https://www.den.nl/publications/231/stimuleer-het-gebruik-van-je-werk-met-creative-commons" target="_blank">
                  Stimuleer het gebruik van je werk met Creative Commons
                </a> <span class="print-only">https://www.den.nl/publications/231/stimuleer-het-gebruik-van-je-werk-met-creative-commons</span>
              </li>
              <li>
                <a href="https://rightsstatements.org/en/" target="_blank">RightsStatements.org</a> <span class="print-only">https://rightsstatements.org/en/</span>
              </li>
            </ul>`
          },
          {
            title: 'Waar vind ik informatie over verweesde werken?',
            value: '<a href="https://www.cultureelerfgoed.nl/onderwerpen/verweesde-werken" target="_blank">Verweesde werken</a> <span class="print-only">https://www.cultureelerfgoed.nl/onderwerpen/verweesde-werken</span>'
          },
          {
            title: 'Algemene bronnenlijst',
            value: `
            <p>Als je meer wilt weten over dit onderwerp, dan kan je de volgende bronnen raadplegen.</p>
            <ul>
              <li>
                <a href="https://openaccess.leidenuniv.nl/bitstream/handle/1887/19552/JuridischeWegwijzer%20Archieven%20Musea%20online%202006.pdf?sequence=2" target="_blank">
                Juridische wegwijzer door Annemarie Beunen
                </a> <span class="print-only">https://openaccess.leidenuniv.nl/bitstream/handle/1887/19552/JuridischeWegwijzer%20Archieven%20Musea%20online%202006.pdf?sequence=2</span>
              </li>
              <li>
                <a href="https://netwerkdigitaalerfgoed.nl/activiteiten/klantinzicht/" target="_blank">
                  NDE: Klantinzicht
                </a> <span class="print-only">https://netwerkdigitaalerfgoed.nl/activiteiten/klantinzicht//</span>
              </li>
              <li>
                <a href="https://www.cultureelerfgoed.nl/onderwerpen/bruiklenen/auteursrecht" target="_blank">
                   RCE
                </a> <span class="print-only">https://www.cultureelerfgoed.nl/onderwerpen/bruiklenen/auteursrecht</span>
              </li>
              <li>
                <a href="https://www.den.nl/themas/rechten-juridisch" target="_blank">
                   DEN: thema Rechten & Juridisch
                </a> <span class="print-only">https://www.den.nl/themas/rechten-juridisch</span>
              </li>
              <li>
                <a href="https://rightsstatements.org/en/" target="_blank">
                   RightsStatements
                </a> <span class="print-only">https://rightsstatements.org/en/</span>
              </li>
            </ul>
            `
          }
        ]
      };
    },

    created() {
      //if (!this.result) {
      //  return this.$router.push({ path: '/step' }).then(() => window.scrollTo(0, 0));
      //}
    },

    methods: {
      resetTree() {
        this.$store.dispatch('clearSelectedSteps');
        return this.$router.push({ path: '/step' }).then(() => window.scrollTo(0, 0));
      },

      getQuestionAnswerValues(step) {
        const question = this.treeCopyright[step.question];
        const answer = question.options.filter(option => option.key === step.selected);
        return {
          'question': question.question,
          'answer': answer[0].text
        };
      },

      addAnotherComponent() {
        this.$store.dispatch('setNameMultipleMakersMultipleWorks', '');
        return this.$router.push({ path: '/step/makerIsMoreMultipleWork' }).then(() => window.scrollTo(0, 0));
      },

      setActiveTab(index) {
        this.activeTab = index;
      },

      printResult() {
        window.print();
      }
    },

    metaInfo() {
      return {
        title: 'Advies'
      };
    }
  };
</script>

<style lang="scss">
  .buttons {
    margin-bottom: 2rem;
  }
</style>
