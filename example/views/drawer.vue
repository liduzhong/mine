<template>
  <div style="height: 100vh">
    <v-button @click="visible = true">按钮</v-button>
    <v-drawer :visible.sync="visible" width="500px">
      <ul>
        <li>
          <a>Menu Item</a>
        </li>
        <li>
          <a>Menu Item</a>
        </li>
      </ul>
    </v-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
