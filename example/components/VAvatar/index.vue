<template>
  <div v-if="url" class="avatar">
    <div :class="{[`w-${w}`]:true,[`h-${h}`]:true,mask:squircle,[`mask-squircle`]:squircle,[`rounded-full`]:!squircle}">
      <img :src="url">
    </div>
  </div>
  <div v-else class="avatar placeholder">
    <div :class="{[`w-${w}`]:true,[`h-${h}`]:true,}" class="bg-neutral-focus text-neutral-content rounded-full">
      <span class="text-3xl">?</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    url: {
      type: String,
      default: '',
    },
    w: {
      type: Number,
      default: 20,
    },
    h: {
      type: Number,
      default: 20,
    },
    squircle: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>

</style>
