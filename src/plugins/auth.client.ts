export default defineNuxtPlugin(() => {
  const { trackAuthStateChange } = useAuthStore()

  trackAuthStateChange()
})
