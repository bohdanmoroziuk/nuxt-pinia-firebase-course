import {
  type NextOrObserver,
  type User,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

export type { User }

export const useAuth = () => {
  const { auth } = useFirebase()

  const trackState = (handler: NextOrObserver<User>) => {
    if (auth) {
      onAuthStateChanged(auth, handler)
    } else {
      console.warn('Firebase auth is not initialized')
    }
  }

  const signup = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password)
  }

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
  }

  const logout = async () => {
    await signOut(auth)
  }

  return {
    trackState,
    signup,
    login,
    logout,
  }
}
