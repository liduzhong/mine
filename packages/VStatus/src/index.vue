<template>
  <div class="shadow stats">
    <div class="stat">
      <div class="stat-title">{{ title }}</div>
      <div class="stat-value">{{ val.toLocaleString() }}</div>
      <div class="stat-desc">{{ desc }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VStatus',
  props: {
    title: { type: String, default: '' },
    val: { type: Number, default: 0 },
    desc: { type: String, default: '' },
  },
}
</script>

<style scoped>
</style>
