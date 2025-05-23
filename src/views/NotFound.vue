<template>
  <div
    class="container"
  >
    <div />
    <div class="column-result">
      <div class="container container-small padding-top-null">
        <h1>Deze pagina kon niet gevonden worden</h1>
        <p>
          Mogelijk bestaat de pagina niet meer of is de URL onjuist.
        </p>
        <div class="buttons">
          <router-link to="/" tag="button" class="btn">
            Ga naar de homepagina
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { useHead } from '@vueuse/head';
  export default {
    created() {
      useHead({
        title: '404'
      });
    }
  };
</script>
