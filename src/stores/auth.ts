export const useAuthStore = defineStore('auth', () => {
  const { trackState, signup, login, logout } = useAuth()

  const user = ref<User | null>(null)

  const isLoggedIn = computed(() => !!user.value)

  const isGuest = computed(() => !user.value)

  function setUser(value: User | null) {
    user.value = value
  }

  function trackAuthStateChange() {
    trackState(setUser)
  }

  return {
    user,
    isLoggedIn,
    isGuest,
    trackAuthStateChange,
    signup,
    login,
    logout,
  }
})
