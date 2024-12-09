export const useAuthStore = defineStore('auth', () => {
  const { getUser, trackState, signup, login, logout } = useAuth()

  const user = ref<User | null>(getUser())

  const isReady = ref(false)

  const isLoggedIn = computed(() => !!user.value)

  const isGuest = computed(() => !user.value)

  function setUser(value: User | null) {
    user.value = value
    isReady.value = true
  }

  function trackAuthStateChange() {
    trackState(setUser)
  }

  return {
    user,
    isReady,
    isLoggedIn,
    isGuest,
    trackAuthStateChange,
    signup,
    login,
    logout,
  }
})
