export const useFirebase = () => {
  const { $auth, $firestore } = useNuxtApp()

  return {
    auth: $auth,
    firestore: $firestore
  }
}
