<template>
  <div id="app">
    <div class="flex h-full">
      <div class="flex-0 flex-shrink-0">
        <div class="w-48 h-screen">
          <v-menu-list
            class="fixed left-0 top:0"
            v-bind="vMenuListData.data"
            @router="(item) => $router.replace(item.path)"
          />
        </div>
      </div>
      <div class="flex-1">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import vMenuListData from '@/components/VMenuList/mock'

export default {
  name: 'App',
  data() {
    return {
      vMenuListData,
    }
  },
}
</script>
