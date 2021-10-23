<template>
  <div
      :class="{ ['alert-info']:info,['alert-success']:success,['alert-warning']:warning,['alert-error']:error}"
      class="alert"
  >
    <div class="flex-1">
      <svg v-if="!success&&!error&&!warning" class="mx-2 w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24"
           xmlns="http://www.w3.org/2000/svg">
        <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"></path>
      </svg>
      <svg v-else-if="success" class="mx-2 w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24"
           xmlns="http://www.w3.org/2000/svg">
        <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"></path>
      </svg>
      <svg v-else-if="warning" class="mx-2 w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24"
           xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            stroke-linecap="round" stroke-linejoin="round"
            stroke-width="2"></path>
      </svg>
      <svg v-else-if="error" class="mx-2 w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24"
           xmlns="http://www.w3.org/2000/svg">
        <path d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
              stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2"></path>
      </svg>
      <label> {{ text }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VAlert',
  props: {
    error: {
      type: Boolean,
      default: false,
    },
    info: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: '',
    },
    warning: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>

</style>
