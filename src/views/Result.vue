<template>
  <div
    class="container columns-2"
  >
    <div class="column-sidebar">
      <StepsProgress
        current-theme="Resultaat"
      />
    </div>
    <div class="column-text">
      <div class="container container-small padding-null">
        <h1>Resultaat</h1>
        <ul class="result-list">
          <li
            v-for="(step, index) in allSelected"
            :key="index">
              <strong>{{ getQuestionAnswerValues(step).question }}</strong><br>
              {{ getQuestionAnswerValues(step).answer }}
          </li>
        </ul>
        <template v-if="multipleComponents.length > 0">
          <h2>Componenten</h2>
          <div class="accordion">
            <div
              v-for="(component, index) in multipleComponents"
              :key="index"
            >
              <a>{{ index + 1 }} {{ component.name }}</a>
              <div class="panel">
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
              </div>
            </div>
          </div>
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
          <a @click="resetTree" class="button-link">&#60; Start opnieuw</a>
          <router-link v-if="showNextSteps" to="/next-steps" tag="button">Lees over het handelingsperspectief</router-link>
          <button
            v-if="isMultiple"
            type="button"
            v-on:click="addAnotherComponent"
          >
            Voeg nog een component toe
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
      ...mapState(['allSelected', 'treeCopyright', 'result', 'isMultiple', 'multipleComponents', 'showNextSteps'])
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
