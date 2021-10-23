<template>
  <div class="drawer h-full drawer-start" :class="[`drawer-${direction}`]">
    <input
      id="v-drawer"
      type="checkbox"
      class="drawer-toggle"
      :checked="visible"
      @change="(e) => $emit('update:visible', e.target.checked)"
    />
    <div class="drawer-content">
      <label for="v-drawer"><slot name="reference"></slot></label>
    </div>
    <div class="drawer-side">
      <label for="v-drawer" class="drawer-overlay"></label>
      <div class="menu p-4 overflow-y-auto bg-base-100 text-base-content" :style="{ width: drawerWidth }">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [String, Number],
      default: '300px',
    },
    direction: {
      type: String,
      default: 'start',
    },
  },
  computed: {
    drawerWidth() {
      return typeof this.width === 'number' ? `${this.width}px` : this.width
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
