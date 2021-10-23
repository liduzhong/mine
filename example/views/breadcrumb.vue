<template>
  <div class="grid gap-4 h-full col p-4">
    <v-breadcrumb :list="breadcrumbList">
      <template slot-scope="{item}">{{ item.name }}</template>
    </v-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'breadcrumb',
  data() {
    return {
      breadcrumbList: [{ name: '一级' }, { name: '二级' }, { name: '三级' }],
    }
  },
}
</script>
