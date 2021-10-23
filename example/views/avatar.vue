<template>
  <div class="grid gap-4 h-full col p-4">
    <v-art-board :data="{ data: {}, desc: VAvatarData.normal.desc }" is-description>
      <div class="text-4xl pl-4">Avatar</div>
    </v-art-board>
    <v-art-board :data="VAvatarData.normal">
      <div class="flex space-x-8 items-center">
        <v-avatar v-bind="VAvatarData.large.data" />
        <v-avatar v-bind="VAvatarData.normal.data" />
        <v-avatar v-bind="VAvatarData.small.data" />
        <v-avatar v-bind="VAvatarData.defaultPic.data" />
      </div>
    </v-art-board>
    <v-art-board :data="{ data: {}, desc: VAvatarGroupData.normal.desc }" is-description>
      <div class="text-4xl pl-4">AvatarGroup</div>
    </v-art-board>
    <v-art-board :data="VAvatarGroupData.normal">
      <div class="flex space-x-8 items-center">
        <v-avatar-group v-bind="VAvatarGroupData.large.data">
          <v-avatar
              v-for="item in VAvatarGroupData.large.data.list"
              v-bind="{url:item,...VAvatarGroupData.large.data}"
          />
        </v-avatar-group>
        <v-avatar-group v-bind="VAvatarGroupData.normal.data">
          <v-avatar
              v-for="item in VAvatarGroupData.normal.data.list"
              v-bind="{url:item,...VAvatarGroupData.normal.data}"
          />
        </v-avatar-group>
        <v-avatar-group v-bind="VAvatarGroupData.small.data">
          <v-avatar
              v-for="item in VAvatarGroupData.small.data.list"
              v-bind="{url:item,...VAvatarGroupData.small.data}"
          />
        </v-avatar-group>
      </div>
    </v-art-board>
  </div>
</template>

<script>
import VAvatarData from '@/components/VAvatar/mock'
import VAvatarGroupData from '@/components/VAvatarGroup/mock'

export default {
  name: 'Index',
  data() {
    return {
      VAvatarData,
      VAvatarGroupData,
    }
  },
}
</script>

<style scoped>
</style>
