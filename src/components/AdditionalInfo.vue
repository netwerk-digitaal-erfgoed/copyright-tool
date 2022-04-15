<template>
  <div
    class="slidein"
    :class="open ? 'open' : ''"
    role="dialog"
    aria-modal=true
  >
    <div class="click-area" @click="closePanel" />
    <div class="panel">
      <a
        class="close-btn"
        @click="closePanel"
        @keyup.enter="closePanel"
        tabindex="0"
      > X
      </a>
      <p class="title">{{ title }}</p>
      <div
        v-if="description"
        v-html="description"
        class="description"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AdditionalInfo',

    props: {
      title: String,
      description: {
        type: String,
        default: null
      },
      open: Boolean
    },

    methods: {
      closePanel() {
        this.$emit('togglePanel', false);
      }
    }
  };
</script>
