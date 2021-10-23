<template>
  <div>
    <v-collapse icon="plus" class="mb-4">
      <v-collapse-item title="I open with focus">
        <p>
          Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of
          focus. Or you can force-open/force-close using
        </p>
        <v-button type="primary">primary</v-button>
      </v-collapse-item>
      <v-collapse-item title="I open with focus">
        <p>
          Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of
          focus. Or you can force-open/force-close using
        </p>
        <v-button type="primary">primary</v-button>
      </v-collapse-item>
    </v-collapse>

    <v-collapse border accordion>
      <v-collapse-item title="I open with focus">
        <p>
          Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of
          focus. Or you can force-open/force-close using
        </p>
        <v-button type="primary">primary</v-button>
      </v-collapse-item>
      <v-collapse-item title="I open with focus">
        <p>
          Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of
          focus. Or you can force-open/force-close using
        </p>
        <v-button type="primary">primary</v-button>
      </v-collapse-item>
    </v-collapse>
  </div>
</template>

<script>
import VCollapse from '@/components/VCollapse/collapse'
import VCollapseItem from '@/components/VCollapse/collapse-item'
import VButton from '@/components/VButton'
export default {
  components: {
    VCollapse,
    VCollapseItem,
    VButton,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
</style>
