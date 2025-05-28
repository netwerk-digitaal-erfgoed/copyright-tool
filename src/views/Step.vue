<template>
  <div v-if="question" class="container">
    <div class="column-questions">
      <StepsProgress :current-theme="question.theme" />
      <div>
        <p v-if="isMultiple && multipleComponentNo > 0 && !question.input">
          Je doorloopt het beslismodel voor: {{ multipleComponentNo }}
          <span v-if="componentName">{{ componentName.name }}</span>
        </p>
        <StepQuestion
          :question="question.question"
          :description="question.description"
          :show-description="question.showDescription"
        />
        <form v-if="question.options || question.input" @keydown.enter.prevent="">
          <fieldset v-if="question.options">
            <div class="steps">
              <StepOption
                v-for="(option, index) in question.options"
                :key="index"
                :question-key="questionKey"
                :option="option"
                v-model="selected"
              />
            </div>
          </fieldset>
          <fieldset v-if="question.input">
            <div class="steps">
              <input v-model="input" type="text" @keyup.enter="nextStep" />
            </div>
          </fieldset>
          <div class="buttons">
            <button
              v-if="allSelected.length > 0 && questionKey !== 'publicationdate'"
              @click="prevStep"
              class="btn btn-outline"
            >
              Vorige stap
            </button>
            <button
              type="button"
              @click="nextStep"
              :disabled="!selected && !input"
              class="btn"
            >
              Ga verder
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import StepOption from '../components/StepOption.vue';
  import StepsProgress from '../components/StepsProgress.vue';
  import StepQuestion from '../components/StepQuestion.vue';
  import { mapState } from 'vuex';
  import { useHead } from '@vueuse/head';

  export default {
    components: {
      StepOption,
      StepsProgress,
      StepQuestion
    },

    data() {
      return {
        questionKey: 'publicationdate',
        input: null,
        selected: null, // string, key van optie
        allSelected: [],
        open: false
      };
    },

    computed: {
      question() {
        if (!this.treeCopyright) return null;
        return this.treeCopyright[this.questionKey];
      },
      componentName() {
        return this.multipleComponents[this.multipleComponentNo - 1];
      },
      selectedOptionObject() {
        // Zoek het volledige optie-object op basis van geselecteerde key
        return this.question?.options?.find((opt) => opt.key === this.selected) || null;
      },
      ...mapState(['treeCopyright', 'isMultiple', 'multipleComponentNo', 'multipleComponents'])
    },

    created() {
      this.allSelected = this.$store.state.allSelected;

      if (this.$route.params.step) {
        this.questionKey = this.$route.params.step;
      }

      if (
        this.allSelected.length === 0 &&
        this.questionKey !== 'publicationdate' &&
        !this.isMultiple
      ) {
        this.$router.push({ path: '/step' }).then(() => window.scrollTo(0, 0));
      }

      this.$store.dispatch('getTree');

      useHead({
        title: 'Stap'
      });
    },

    methods: {
      prevStep() {
        if (this.isMultiple) {
          if (this.questionKey === 'maker') {
            this.$store.dispatch('removeComponent');
          } else if (this.questionKey === 'makerIsMoreMultipleWork') {
            this.$store.dispatch('setMultipleMakersMultipleWorks', false);
          } else {
            this.$store.dispatch('removeStepComponent');
          }
        } else {
          if (this.questionKey === 'makerIsMoreMultipleWork') {
            this.$store.dispatch('setMultipleMakersMultipleWorks', false);
          } else {
            this.$store.dispatch('removeStep');
          }
        }

        // Stap keys array, bijvoorbeeld
        const stepsOrder = Object.keys(this.treeCopyright);

        // Vind index huidige stap
        const currentIndex = stepsOrder.indexOf(this.questionKey);

        // Bepaal vorige index (minimaal 0)
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : 0;

        // Haal vorige step key
        const prevStepKey = stepsOrder[prevIndex];

        // Navigeer naar die stap
        this.$router.push({ path: `/step/${prevStepKey}` }).then(() => {
          window.scrollTo(0, 0);
        });
      },

      nextStep() {
        if (!this.selectedOptionObject && !this.input) {
          return; // Niets geselecteerd en geen input, stop
        }

        // Gebruik het geselecteerde optie-object
        const selected = this.selectedOptionObject;

        if (selected && selected.result) {
          this.$store.dispatch('updateSelectedSteps', {
            question: this.questionKey,
            selected: selected.key
          });

          this.$store.dispatch('setResult', selected.result);
          this.$store.dispatch('setModelovereenkomst', selected.modelovereenkomst);
          this.$store.dispatch('setOutofcommerce', selected.outofcommerce);
          this.$store.dispatch('setCBO', selected.cbo);
          this.$store.dispatch('setNote', selected.note);

          this.$store.dispatch('setNextSteps', selected.showNextSteps);
          return this.$router.push({ path: '/result' }).then(() => window.scrollTo(0, 0));
        }

        if (selected?.key === 'moreMultipleWorks') {
          this.$store.dispatch('setMultipleMakersMultipleWorks', true);
        }

        if (this.input) {
          this.selected = this.question.input;
          this.$store.dispatch('setNameMultipleMakersMultipleWorks', this.input);
        }

        this.$store.dispatch('updateSelectedSteps', {
          question: this.questionKey,
          selected: selected ? selected.key : null
        });
        return this.$router.push({ path: `/step/${selected?.next || ''}` }).then(() => window.scrollTo(0, 0));
      }
    }
  };
</script>
