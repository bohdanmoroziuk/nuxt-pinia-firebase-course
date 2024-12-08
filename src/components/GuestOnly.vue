<script setup lang="ts">
const authStore = useAuthStore()
const { isGuest } = storeToRefs(authStore)
</script>

<template>
  <slot v-if="isGuest" />
</template>
