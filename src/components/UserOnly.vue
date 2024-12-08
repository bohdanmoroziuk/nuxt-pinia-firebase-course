<script setup lang="ts">
const authStore = useAuthStore()
const { isLoggedIn } = storeToRefs(authStore)
</script>

<template>
  <slot v-if="isLoggedIn" />
</template>
