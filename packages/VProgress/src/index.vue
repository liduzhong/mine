<template>
  <progress :class="{[`progress-${type}`]:true}" :max="max" :value="value" class="progress" />
</template>

<script>
export default {
  name: 'VProgress',
  props: {
    max: {
      type: Number,
      default: 100,
    },
    value: {
      type: Number,
      default: 100,
    },
    type: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>

</style>
