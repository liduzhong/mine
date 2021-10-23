<template>
  <div class="v-collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    accordion: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: 'arrow',
    },
  },
  provide() {
    return {
      collapse: this,
    }
  },
}
</script>
