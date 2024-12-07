import { createUserWithEmailAndPassword, signOut, type User } from 'firebase/auth'

export const useAuthStore = defineStore('auth', () => {
  const { auth } = useFirebase()

  const user = ref<User | null>(null)

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

  const logout = async () => {
    await signOut(auth)

    user.value = null
  }

  return {
    user,
    signupError,
    signup,
    logout,
  }
})
