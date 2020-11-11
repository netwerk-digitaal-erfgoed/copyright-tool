<template>
  <div id="app">
    <header>
      <div class="title">Beslismodel auteursrechten</div>
      <nav>
        <router-link to="/colofon">Colofon</router-link>
      </nav>
    </header>
    <main>
      <RouterView :key="$route.fullPath" />
    </main>
  </div>
</template>

<style lang="scss">
@import "~normalize.css/normalize.css";
@import "./design";
</style>
