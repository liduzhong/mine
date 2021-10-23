<template>
  <div>
    <div
      class="badge"
      :class="{
        [`badge-${type}`]: !!type,
        [`badge-${size}`]: true,
        'badge-outline': outline,
      }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="inline-block w-4 h-4 mr-2 stroke-current cursor-pointer"
        v-if="clearable"
        @click="handleClear"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VBadge',
  props: {
    type: String,
    size: {
      type: String,
      default: 'md',
    },
    outline: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClear(e) {
      this.$emit('close', e)
    },
  },
}
</script>
