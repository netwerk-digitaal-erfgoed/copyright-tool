<template>
  <div
    v-if="question"
    class="container columns-2"
  >
    <div>
      <StepsProgress
        :current-theme="question.theme"
      />
    </div>
    <div class="column-questions">
      <div>
        <p v-if="isMultiple && multipleComponentNo > 0 && !question.input">
          Je doorloopt het beslismodel voor: {{ multipleComponentNo }} {{ componentName.name }}
        </p>
        <StepQuestion
          :question="question.question"
          :description="question.description"
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
            <a v-if="allSelected.length > 0" @click="prevStep" class="button-link">&#60; Vorige stap</a>
            <button
              type="button"
              @click="nextStep"
              :disabled="!selected.key && !input"
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
        allSelected: []
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
        this.$router.push({ path: '/step' });
      }

      this.$store.dispatch('getTree');
    },

    methods: {
      prevStep() {
        this.$store.dispatch('removeStep');
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
          return this.$router.push({ path: '/result' });
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

        // is there a before next?
        if (this.selected.beforenext) {
          this.openModal();
        } else {
          // update selected steps and proceed to the next step
          this.$store.dispatch('updateSelectedSteps', {
            question: this.questionKey,
            selected: this.selected.key
          });
          return this.$router.push({ path: `/step/${this.selected.next}` });
        }
      },
      openModal() {
        this.$modal.show(
          {
            template: '<div class="modal-content" v-html="beforenext"></div>',
            props: ['beforenext']
          },
          {
            beforenext: this.selected.beforenext
          },
          { name: 'beforenext', height: 'auto', width: '60%', scrollable: true },
          {
            'closed': this.goToNext
          }
        );
      },
      goToNext() {
        this.$store.dispatch('updateSelectedSteps', {
          question: this.questionKey,
          selected: this.selected.key
        });
        return this.$router.push({ path: `/step/${this.selected.next}` });
      },
      selectedOption(newValue) {
        this.selected = newValue;
      }
    }
  };
</script>
