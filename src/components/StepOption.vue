<template>
  <label class="radio">
    <input
      type="radio"
      :value="option.key"
      :name="questionKey"
      v-model="selected"
    /> <strong>{{ option.text }}</strong><br/>
    {{ option.description }}
  </label>
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
      }
    }
  };
</script>
