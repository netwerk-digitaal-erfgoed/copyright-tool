<template>
  <div id="app">
    <RouterView :key="$route.fullPath" />
  </div>
</template>

<style lang="scss">
@import "~normalize.css/normalize.css";
@import "./design";
</style>
