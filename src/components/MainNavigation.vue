<template>
  <nav class="container">
    <div>
      <a href=" https://mailchi.mp/den/aanmeldennieuwsbrief" target="_blank">nieuwsbrief DEN</a>
      <a href="/assets/handleiding-beslismodel-auteursrechten.pdf" target="_blank">Handleiding</a>
      <router-link to="/colofon" @click.native="scrollToTop">Colofon &amp; disclaimer</router-link>
    </div>
    <a href="https://www.netwerkdigitaalerfgoed.nl/" target="_blank">
      <img src="../design/NDE-logo.png" alt="Netwerk Digitaal Erfgoed" width="62" height="35" style="background: #fff; padding: 3px; margin-right: 0.5rem;"/>
    </a>
    <a href="https://www.den.nl/" target="_blank" class="logo-den" aria-label="DEN, kennisinstituut cultuur &amp; digitale transformatie">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="62px" height="25px" viewBox="0 0 166 42" class="Navigation-logoSvg">
        <path fill="#ffd3e3" d="M20.192 41.964c6.644 0 11.91-1.902 15.803-5.734 3.893-3.804 5.824-8.897 5.824-15.248 0-6.35-1.931-11.413-5.824-15.247C32.103 1.903 26.836 0 20.192 0H0v41.964h20.192ZM9.951 8.81h10.068c3.834 0 6.76 1.083 8.75 3.249 1.99 2.165 2.986 5.15 2.986 8.926 0 7.61-4.038 12.175-11.734 12.175H9.95V8.809ZM119.923 0H45.316v41.964h74.605v-8.75H55.267v-8.165h60.69v-7.786h-60.69V8.751h64.656V0Zm13.914 41.964V16.857l-.058-5.327h.586l18.115 30.436h12.876V0h-9.951v25.137l.059 5.327h-.586L136.764 0h-12.875v41.964h9.95-.002Z"></path></svg>
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

