<template>
  <ul class="py-4 h-full w-48 shadow-lg menu bg-base-100 rounded-box">
    <li class="menu-title">
      <span>{{ title }}</span>
    </li>
    <li v-for="item in list" :key="item.path" class="bordered" @click="handleRouter(item)">
      <a>
        <svg
            class="inline-block mr-2 w-5 h-5 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
          ></path>
        </svg>
        {{item.name}}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'VMenuList',
  props: {
    list: {
      type: Array,
      default: () => ([]),
    },
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleRouter(item) {
      this.$route.path !== item.path && this.$emit('router', item)
    },
  },
}
</script>

<style scoped>

</style>
