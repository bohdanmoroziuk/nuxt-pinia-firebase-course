<script setup lang="ts">
const authStore = useAuthStore()
const { isGuest, isReady } = storeToRefs(authStore)
</script>

<template>
  <slot v-if="isGuest && isReady" />
</template>
