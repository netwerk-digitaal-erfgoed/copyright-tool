<template>
  <div>
    <div class="progress-current">{{ currentTheme }}</div>
    <ul class="progress">
      <li
        v-for="(theme, index) in themes"
        :key="index"
        :class="{ done: index < currentThemeIndex, active: index === currentThemeIndex }"
      />
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'StepsProgress',

    props: {
      currentTheme: String
    },

    computed: {
      currentThemeIndex() {
        return this.themes.indexOf(this.currentTheme);
      }
    },

    data() {
      return {
        themes: ['Wanneer is het werk gepubliceerd?', 'Wie is de maker?', 'Wie heeft het auteursrecht op het werk?', 'Advies']
      };
    }
  };
</script>
