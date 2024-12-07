export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore()
  const { isGuest } = storeToRefs(authStore)

  if (unref(isGuest)) {
    return navigateTo('/login')
  }
})
