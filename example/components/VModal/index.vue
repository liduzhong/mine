<template>
  <div :class="{[`modal-open`]:visible}" class="modal">
    <div class="modal-box">
      <slot></slot>
      <div class="modal-action">
        <slot name="footer">
          <div class="btn btn-primary">Accept</div>
          <div class="btn">Close</div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>

</style>
