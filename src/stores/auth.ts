import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, type User } from 'firebase/auth'

export const useAuthStore = defineStore('auth', () => {
  const { auth } = useFirebase()

  const user = ref<User | null>(null)

  const loginError = ref<string | null>(null)

  const signupError = ref<string | null>(null)

  const signup = async (email: string, password: string) => {
    try {
      signupError.value = null

      const credential = await createUserWithEmailAndPassword(auth, email, password)

      user.value = credential.user
    } catch (error) {
      signupError.value = (error as Error).message
    }
  }

  const login = async (email: string, password: string) => {
    try {
      loginError.value = null

      const credential = await signInWithEmailAndPassword(auth, email, password)

      user.value = credential.user
    } catch (error) {
      loginError.value = (error as Error).message
    }
  }

  const logout = async () => {
    await signOut(auth)

    user.value = null
  }

  return {
    user,
    loginError,
    signupError,
    signup,
    login,
    logout,
  }
})
