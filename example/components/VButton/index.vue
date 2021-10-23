<template>
  <div
      :class="{ [`btn-${size}`]:true,loading,[`btn-${type}`]:true, 'btn-outline':outline,'btn-square':square,'btn-circle':circle,[`btn-disabled`]:disabled ,'no-animation':noAnimation}"
      :disabled="disabled"
      class="btn"
      @click="$emit('click')"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    noAnimation: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: '',
    },
    outline: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    square: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'md',
    },

  },
}
</script>

<style scoped>

</style>
