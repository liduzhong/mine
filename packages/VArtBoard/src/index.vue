<template>
  <div class="p-4 rounded border-2 border-opacity-10 artboard border-base-content">
    <div class="flex flex-col h-full">
      <div class="flex-1">
        <slot></slot>
      </div>


      <div v-if="data.desc" class="flex-shrink-0 p-4 bg-white rounded">
        <div class="pt-4 mb-4 font-light text-gray-500 border-t-2 border-gray-200 border-solid">参数说明：</div>
        <div class="overflow-auto max-h-48">
          <table class="table table-compact w-full">
            <thead>
            <tr>
              <th>prop</th>
              <th>type</th>
              <th>value</th>
              <th>current value</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="key in desc" :key="key">
              <td>{{ key }}</td>
              <td>{{ data.desc[key].type.name }}</td>
              <td :class="{['text-gray-300']:!data.desc[key].default}">{{ data.desc[key].default || 'N/A' }}</td>
              <td :class="{['text-gray-300']:!data.data[key]}">{{ data.data[key] || 'N/A' }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VArtBoard',
  props: {
    isDescription: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    desc() {
      let descList = Object.keys(this.data.desc).sort()
      if (!this.isDescription) {
        descList = descList.filter(key => {
          return typeof this.data.data[key] !== 'number' ? this.data.data[key] : true
        })
      }
      return descList

    }
  }
}
</script>

<style scoped>

</style>
