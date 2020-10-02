<template>
  <div class="intro">
    <h1 v-if="question">
      {{ question }}
    </h1>
    <p
      v-if="description && typeof description === 'string'"
    >
      {{ description }}
    </p>
    <div
      v-else-if="typeof description === 'object'"
    >
      <div v-for="(paragraph, index) in description" :key="index">
        <p v-if="index === 0">{{ paragraph }}</p>
      </div>
    </div>
    <button class="readmore" v-if="typeof description === 'object' && description.length > 1" @click="showExplanation">
      Toelichting
    </button>
  </div>
</template>

<script>
  export default {
    name: 'StepQuestion',

    props: {
      question: String,
      description: [String, Array]
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
        this.$modal.show(
          { template: '<div class="modal-content" v-html="explanation"></div>',
            props: ['explanation']
          },
          { explanation: this.explanation },
          { name: 'explanation', height: 'auto', width: '60%', scrollable: true });
      }
    }
  };
</script>
