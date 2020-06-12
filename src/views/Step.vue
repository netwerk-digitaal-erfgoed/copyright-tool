<template>
  <div class="container">
    <div v-if="question">
      <StepQuestion
        :question="question.question"
        :description="question.description"
      />
      <form v-if="question.options">
        <fieldset>
          <div class="steps">
            <StepOption
              v-for="option in question.options"
              :key="option.key"
              :question-key="questionKey"
              :option="option"
              @change="selectedOption"
            />
          </div>
        </fieldset>
        <div class="buttons">
          <button type="button" v-on:click="nextStep" :disabled="!selected.key">
            Ga verder
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import StepOption from '../components/StepOption.vue';
  import StepQuestion from '../components/StepQuestion.vue';

  import { mapState } from 'vuex';

  export default {
    components: {
      StepOption,
      StepQuestion
    },

    data() {
      return {
        questionKey: 'publicationdate',
        selected: Object,
        allSelected: []
      };
    },

    computed: {
      question() {
        if (!this.treeCopyright) return;
        return this.treeCopyright[this.questionKey];
      },
      ...mapState(['treeCopyright'])
    },

    created() {
      this.allSelected = this.$store.state.allSelected;

      if (this.$route.params.step) {
        this.questionKey = this.$route.params.step;
      }

      if (
        this.allSelected.length === 0 &&
        this.questionKey !== 'publicationdate'
      ) {
        this.$router.push({ path: '/step' });
      }

      this.$store.dispatch('getTree');
    },

    methods: {
      nextStep() {
        if (this.selected.result) {
          this.$store.dispatch('clearSelectedSteps');
          return this.$router.push({ path: '/result' });
        }

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
