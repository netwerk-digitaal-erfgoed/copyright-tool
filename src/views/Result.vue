<template>
  <div
    class="container columns-2"
  >
    <div>
      <StepsProgress
        current-theme="Resultaat"
      />
    </div>
    <div class="column-result">
      <div class="container container-small padding-top-null">
        <h1>Resultaat</h1>
        <ul>
          <li
            v-for="(step, index) in allSelected"
            :key="index">
              <strong>{{ getQuestionAnswerValues(step).question }}</strong><br>
              {{ getQuestionAnswerValues(step).answer }}
          </li>
        </ul>
        <template v-if="multipleComponents.length > 0">
          <h2>Componenten</h2>
          <ul>
            <li
              v-for="(component, index) in multipleComponents"
              :key="index"
            >
                {{ index + 1 }} {{ component.name }}
                <ul v-if="component.steps.length > 0">
                  <li
                    v-for="(step, index) in component.steps"
                    :key="`sub-${index}`"
                  >
                    <strong>{{ getQuestionAnswerValues(step).question }}</strong><br>
                    {{ getQuestionAnswerValues(step).answer }}
                  </li>
                </ul>
                <p
                  v-if="component.result && typeof component.result === 'string'"
                  v-html="component.result"
                />
                <div
                  v-else-if="typeof component.result === 'object'"
                >
                  <div v-for="(paragraph, index) in component.result" :key="index">
                    <p v-html="paragraph" />
                  </div>
                </div>
            </li>
          </ul>
        </template>
        <template v-if="!isMultiple">
          <p
            v-if="result && typeof result === 'string'"
            v-html="result"
          />
          <div
            v-else-if="typeof result === 'object'"
          >
            <div v-for="(paragraph, index) in result" :key="index">
              <p v-html="paragraph" />
            </div>
          </div>
        </template>
        <div class="buttons">
          <button
            v-if="isMultiple"
            type="button"
            v-on:click="addAnotherComponent"
          >
            Voeg nog een component toe
          </button>
          <button type="button" v-on:click="resetTree">
            Start opnieuw
          </button>
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
      ...mapState(['allSelected', 'treeCopyright', 'result', 'isMultiple', 'multipleComponents'])
    },

    created() {
      if (!this.result) {
        return this.$router.push({ path: '/step' });
      }
    },

    methods: {
      resetTree() {
        this.$store.dispatch('clearSelectedSteps');
        return this.$router.push({ path: '/step' });
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
        return this.$router.push({ path: '/step/makerIsMoreMultipleWork' });
      }
    }
  };
</script>
