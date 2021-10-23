<template>
  <div class="grid gap-4 h-full col p-4">
    <v-art-board :data="{data:{},desc:VAlertData.normal.desc}" is-description>
      <div class="text-4xl pl-4">Alert</div>
    </v-art-board>
    <v-art-board :data="VAlertData.normal">
      <v-alert v-bind="VAlertData.normal.data" />
    </v-art-board>
    <v-art-board :data="VAlertData.info">
      <v-alert v-bind="VAlertData.info.data" />
    </v-art-board>
    <v-art-board :data="VAlertData.success">
      <v-alert v-bind="VAlertData.success.data" />
    </v-art-board>
    <v-art-board :data="VAlertData.warning">
      <v-alert v-bind="VAlertData.warning.data" />
    </v-art-board>
    <v-art-board :data="VAlertData.error">
      <v-alert v-bind="VAlertData.error.data" />
    </v-art-board>
  </div>
</template>

<script>
import VAlertData from '@/components/VAlert/mock'

export default {
  name: 'Index',
  data() {
    return {
      VAlertData,
    }
  },
}
</script>

<style scoped>

</style>
