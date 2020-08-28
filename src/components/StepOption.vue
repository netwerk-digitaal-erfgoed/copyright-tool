<template>
  <div>
    <label class="radio">
      <input
        type="radio"
        :value="option.key"
        :name="questionKey"
        v-model="selected"
      /> <strong>{{ option.text }}</strong>
    </label>
    <a class="readmore" v-if="option.description" @click="showExplanation">
      Toelichting
    </a>
  </div>
</template>

<script>
  export default {
    name: 'StepOption',

    props: {
      option: Object,
      questionKey: String
    },

    computed: {
      selected: {
        get() {
          return this.option;
        },
        set() {
          this.$emit('change', this.option);
        }
      },
      explanation() {
        if (this.option.description && typeof this.option.description === 'string') {
          return this.option.description;
        }

        let text = '';
        for (let i = 0; i < this.option.description.length; i++) {
          text += `<p>${this.option.description[i]}</p>`;
        }
        return text;
      }
    },

    methods: {
      showExplanation() {
        this.$modal.show(
          { template: `<div class="modal-content" v-html="explanation">
            </div>
          `,
            props: ['explanation']
          },
          { explanation: this.explanation },
          { name: 'explanation', height: 'auto', width: '60%', scrollable: true });
      }
    }
  };
</script>
