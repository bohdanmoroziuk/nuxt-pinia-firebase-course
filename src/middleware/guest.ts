export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore()
  const { isLoggedIn } = storeToRefs(authStore)

  if (unref(isLoggedIn)) {
    return navigateTo('/')
  }
})
