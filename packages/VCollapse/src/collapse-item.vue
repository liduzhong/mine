<template>
  <div tabindex="0" class="collapse" :class="{ border: collapse.border, [`collapse-${collapse.icon}`]: collapse.icon }">
    <input type="checkbox" v-if="!collapse.accordion" />
    <div class="collapse-title text-xl font-medium">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="collapse-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
  inject: ['collapse'],
}
</script>

<style scoped lang="scss">
</style>
