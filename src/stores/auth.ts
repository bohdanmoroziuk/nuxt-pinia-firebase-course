import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, type User } from 'firebase/auth'

export const useAuthStore = defineStore('auth', () => {
  const { auth } = useFirebase()

  const user = ref<User | null>(null)

  const loginError = ref<string | null>(null)

  const signupError = ref<string | null>(null)

  const trackAuthStateChange = () => {
    if (auth) {
      onAuthStateChanged(auth, (data) => {
        user.value = data
      })
    } else {
      console.warn('Firebase auth is not initialized')
    }
  }

  const signup = async (email: string, password: string) => {
    try {
      signupError.value = null

      await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
      signupError.value = (error as Error).message
    }
  }

  const login = async (email: string, password: string) => {
    try {
      loginError.value = null

      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      loginError.value = (error as Error).message
    }
  }

  const logout = async () => {
    await signOut(auth)
  }

  return {
    user,
    loginError,
    signupError,
    trackAuthStateChange,
    signup,
    login,
    logout,
  }
})
