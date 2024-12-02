export const useFirebase = () => {
  const { $firestore } = useNuxtApp()

  return {
    firestore: $firestore
  }
}
