<template>
  <div class="gap-4 p-4 h-full col">
    <div class="flex flex-wrap">

      <div class="flex-shrink-0">
        <v-button-group>
          <v-button type="primary">primary</v-button>
          <v-button type="danger">primary</v-button>
          <v-button type="warning">primary</v-button>
          <v-button type="success">primary</v-button>
        </v-button-group>
      </div>
    </div>
  </div>
</template>

<script>
import VBadge from '@/components/VBadge'
import VBadgeData from '@/components/VBadge/mock'

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
