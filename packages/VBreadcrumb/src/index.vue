<template>
  <div class="breadcrumbs">
    <ul>
      <li v-for="(item, index) in list" :key="item.id || index">
        <slot :item="item" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VBreadcrumb',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
</style>
