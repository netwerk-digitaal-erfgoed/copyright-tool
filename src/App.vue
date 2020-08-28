<template>
  <div id="app">
    <main>
      <RouterView :key="$route.fullPath" />
    </main>
  </div>
</template>

<style lang="scss">
@import "~normalize.css/normalize.css";
@import "./design";
</style>
