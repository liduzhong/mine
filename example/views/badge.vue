<template>
  <div class="gap-4 h-full col p-4">
    <v-badge type="primary">primary</v-badge>
    <v-badge type="secondary">secondary</v-badge>
    <v-badge type="accent">accent</v-badge>
    <v-badge type="ghost">ghost</v-badge>
    <v-badge type="info">info</v-badge>
    <v-badge type="success">success</v-badge>
    <v-badge type="warning">warning</v-badge>
    <v-badge type="error">error</v-badge>
    <v-badge size="lg">lg</v-badge>
    <v-badge size="md">md</v-badge>
    <v-badge size="sm">sm</v-badge>
    <v-badge size="xs">xs</v-badge>
    <v-badge clearable>clearable</v-badge>
    <v-badge outline>outline</v-badge>
  </div>
</template>

<script>
import VBadgeData from '@/components/VBadge/mock'
import VBadge from '@/components/VBadge'

export default {
  name: 'Index',
  components: { VBadge },
  data() {
    return {
      VBadgeData,
    }
  },
}
</script>

<style scoped>
</style>
