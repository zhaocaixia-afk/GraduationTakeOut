<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="`#${iconClass}`"></use>
  </svg>
</template>
<script>
export default {
  name: 'IconSvg',
  props: {
    iconClass: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped lang="scss">
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
