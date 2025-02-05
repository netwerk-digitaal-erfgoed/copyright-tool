<template>
  <nav class="container">
    <div>
      <a href="/assets/handleiding-beslismodel-auteursrechten.pdf" target="_blank">Handleiding</a>
      <router-link to="/colofon" @click.native="scrollToTop">Colofon &amp; disclaimer</router-link>
    </div>
    <a href="https://www.netwerkdigitaalerfgoed.nl/" target="_blank">
      <img src="../design/NDE-logo.png" alt="Netwerk Digitaal Erfgoed" width="62" height="35" style="background: #fff; padding: 3px; margin-right: 0.5rem;"/>
    </a>
  </nav>
</template>


<script>
  export default {
    methods: {
      scrollToTop() {
        window.scrollTo(0, 0);
      }
    }
  };
</script>

