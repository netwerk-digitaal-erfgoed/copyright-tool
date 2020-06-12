<template>
  <div class="intro">
    <h1 v-if="question">{{ question }}</h1>
    <p v-if="description && typeof description === 'string'">{{ description }}</p>
    <div v-else>
      <p v-for="paragraph in description" :key="paragraph">{{ paragraph }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StepQuestion',

    props: {
      question: String,
      description: [String, Array]
    }
  };
</script>
