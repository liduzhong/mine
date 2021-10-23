<template>
  <ul class="w-full steps">
    <li class="step step-primary">Register</li>
    <li class="step">Choose plan</li>
    <li class="step">Purchase</li>
    <li class="step">Receive Product</li>
  </ul>
</template>

<script>
export default {
  name: 'VSteps',
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style scoped>
</style>
