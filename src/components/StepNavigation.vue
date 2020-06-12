<template>
  <div>
    <button type="button" v-on:click="nextStep">Ga verder</button>
  </div>
</template>

<script>
  export default {
    name: 'StepQuestion',

    methods: {
      nextStep() {
        console.log('nextStep');
      }
    }
  };
</script>
