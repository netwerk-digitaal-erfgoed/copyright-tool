<template>
  <div class="intro">
    <h1 v-if="question">
      {{ question }}
    </h1>
    <template v-if="showDescription">
      <p v-for="(paragraph, index) in description" :key="index" v-html="paragraph"/>
    </template>
    <template v-else>
      <div v-for="(paragraph, index) in description" :key="index">
        <p v-if="index === 0">{{ paragraph }}</p>
      </div>
    </template>
    <button class="readmore" v-if="description && description.length > 1 && !showDescription" @click="showExplanation">
      Toelichting
    </button>
    <AdditionalInfo
      :title="question"
      :description="explanation"
      :open="open"
      @togglePanel="togglePanel($event)"
    />
  </div>
</template>

<script>
  import AdditionalInfo from './AdditionalInfo.vue';

  export default {
    name: 'StepQuestion',

    components: {
      AdditionalInfo
    },

    props: {
      question: String,
      description: {
        type:  [String, Array],
        default: null
      },
      showDescription: Boolean
    },

    data() {
      return {
        open: false
      };
    },

    computed: {
      explanation() {
        if (!this.description || typeof this.description !== 'object') return;

        let text = '';
        for (let i = 1; i < this.description.length; i++) {
          text += `<p>${this.description[i]}</p>`;
        }
        return text;
      }
    },

    methods: {
      showExplanation() {
        this.open = true;
      },
      togglePanel(toggle) {
        this.open = toggle;
      }
    }
  };
</script>
