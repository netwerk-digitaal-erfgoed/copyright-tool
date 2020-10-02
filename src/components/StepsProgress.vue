<template>
  <ul class="progress">
    <li
      v-for="(theme, index) in themes"
      :key="index"
      :class="{ active: currentTheme === theme }"
    >
      {{ theme }}
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'StepsProgress',

    props: {
      currentTheme: String
    },

    data() {
      return {
        themes: ['Is het werk beschermd?', 'Wie is rechthebbende?', 'Waar liggen de rechten?', 'Resultaat']
      };
    }
  };
</script>
