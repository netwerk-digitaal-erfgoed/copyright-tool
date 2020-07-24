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
        <p>
          {{ result }}
        </p>
        <div class="buttons">
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
      ...mapState(['result'])
    },

    created() {
      if (!this.result) {
        return this.$router.push({ path: '/step' });
      }
    },

    methods: {
      resetTree() {
        this.$store.dispatch('setResult', null);
        this.$store.dispatch('clearSelectedSteps');
        return this.$router.push({ path: '/step' });
      }
    }
  };
</script>
