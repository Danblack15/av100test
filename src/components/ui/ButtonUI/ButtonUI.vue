<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
    name: 'ButtonUI'
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';
@import './ButtonUI.scss';
</style>