<template>
  <div
    v-if="question"
    class="container"
  >
    <div class="column-questions">
      <StepsProgress
        :current-theme="question.theme"
      />
      <div>
        <p v-if="isMultiple && multipleComponentNo > 0 && !question.input">
          Je doorloopt het beslismodel voor: {{ multipleComponentNo }}
          <span v-if="componentName">
            {{ componentName.name }}
          </span>
        </p>
        <StepQuestion
          :question="question.question"
          :description="question.description"
          :show-description="question.showDescription"
        />
        <form
          v-if="question.options || question.input"
          @keydown.enter.prevent=""
        >
          <fieldset v-if="question.options">
            <div class="steps">
              <StepOption
                v-for="(option, index) in question.options"
                :key="index"
                :question-key="questionKey"
                :option="option"
                @change="selectedOption"
              />
            </div>
          </fieldset>
          <fieldset v-if="question.input">
            <div class="steps">
              <input
                v-model="input"
                type="text"
                v-on:keyup.enter="nextStep"
              />
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
              :disabled="!selected.key && !input"
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
        selected: Object,
        allSelected: [],
        open: false
      };
    },

    computed: {
      question() {
        if (!this.treeCopyright) return;
        return this.treeCopyright[this.questionKey];
      },
      componentName() {
        return this.multipleComponents[this.multipleComponentNo - 1];
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
    },

    methods: {
      prevStep() {
        if (this.isMultiple) {
          // verwijder component uit multiplecomponents array
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
        this.$router.go(-1);
      },
      nextStep() {
        // show result page when final step in tree
        if (this.selected.result) {
          // add selected before showing result
          this.$store.dispatch('updateSelectedSteps', {
            question: this.questionKey,
            selected: this.selected.key
          });

          this.$store.dispatch('setResult', this.selected.result);
          this.$store.dispatch('setOrphaned', this.selected.orphaned);
          this.$store.dispatch('setOutofcommerce', this.selected.outofcommerce);
          this.$store.dispatch('setCBO', this.selected.cbo);
          this.$store.dispatch('setNote', this.selected.note);

          this.$store.dispatch('setNextSteps', this.selected.showNextSteps);
          return this.$router.push({ path: '/result' }).then(() => window.scrollTo(0, 0));
        }

        // else set variable in case of mulitple makers and multiple components
        if (this.selected.key === 'moreMultipleWorks') {
          this.$store.dispatch('setMultipleMakersMultipleWorks', true);
        }

        // if input field, store value after adding a name for a specific component
        if (this.input) {
          this.selected = this.question.input;
          this.$store.dispatch('setNameMultipleMakersMultipleWorks', this.input);
        }

        // update selected steps and proceed to the next step
        this.$store.dispatch('updateSelectedSteps', {
          question: this.questionKey,
          selected: this.selected.key
        });
        return this.$router.push({ path: `/step/${this.selected.next}` }).then(() => window.scrollTo(0, 0));
      },
      selectedOption(newValue) {
        this.selected = newValue;
      }
    },

    metaInfo() {
      return {
        title: 'Stap'
      };
    }
  };
</script>
