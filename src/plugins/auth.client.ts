const USER_ROUTES = [
  '/',
]

const GUEST_ROUTES = [
  '/login',
  '/signup',
]

export default defineNuxtPlugin(() => {
  const router = useRouter()

  const authStore = useAuthStore()
  const { user } = storeToRefs(authStore)
  const { trackAuthStateChange } = authStore

  trackAuthStateChange()

  const redirect = async () => {
    const { path } = router.currentRoute.value

    if (user.value) {
      if (GUEST_ROUTES.includes(path)) {
        await navigateTo('/')
      }
    }

    if (user.value == null) {
      if (USER_ROUTES.includes(path)) {
        await navigateTo('/login')
      }
    }
  }

  watch(user, redirect, { immediate: true })
})
