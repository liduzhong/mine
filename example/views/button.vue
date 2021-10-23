<template>
  <div class="gap-4 p-4 h-full col">
    <div class="flex flex-wrap">

      <div class="flex-shrink-0">
        <v-button type="primary">primary</v-button>
      </div>
      <div class="flex-shrink-0">
        <v-button type="secondary">secondary</v-button>
      </div>
      <div class="flex-shrink-0">
        <v-button type="accent">accent</v-button>
      </div>
      <div class="flex-shrink-0">
        <v-button type="info">accent</v-button>
      </div>
      <div class="flex-shrink-0">
        <v-button type="success">accent</v-button>
      </div>
      <div class="flex-shrink-0">
        <v-button type="warning">accent</v-button>
      </div>
      <div class="flex-shrink-0">
        <v-button type="error">accent</v-button>
      </div>
      <div class="flex-shrink-0">
        <v-button type="ghost">accent</v-button>
      </div>
      <div class="flex-shrink-0">
        <v-button type="link">accent</v-button>
      </div>

      <div class="flex-shrink-0">
        <v-button outline type="primary">primary</v-button>
      </div>
      <div class="flex-shrink-0">
        <v-button outline type="secondary">secondary</v-button>
      </div>
      <div class="flex-shrink-0">
        <v-button outline type="accent">accent</v-button>
      </div>
      <div class="flex-shrink-0">
        <v-button outline type="info">accent</v-button>
      </div>
      <div class="flex-shrink-0">
        <v-button outline type="success">accent</v-button>
      </div>
      <div class="flex-shrink-0">
        <v-button outline type="warning">accent</v-button>
      </div>
      <div class="flex-shrink-0">
        <v-button outline type="error">accent</v-button>
      </div>
      <div class="flex-shrink-0">
        <v-button outline type="ghost">accent</v-button>
      </div>

      <div class="flex-shrink-0">
        <v-button circle outline type="primary">primary</v-button>
      </div>
      <div class="flex-shrink-0">
        <v-button outline square type="primary">primary</v-button>
      </div>

      <div class="flex-shrink-0">
        <v-button disabled type="primary">primary</v-button>
      </div>
      <div class="flex-shrink-0">
        <v-button loading type="primary">accent</v-button>
      </div>

      <div class="flex-shrink-0">
        <v-button type="wide">wide</v-button>
      </div>
      <div class="flex-shrink-0">
        <v-button type="block">block</v-button>
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
