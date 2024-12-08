import { getDocs, addDoc, updateDoc, deleteDoc, doc, collection, query, where } from 'firebase/firestore'

export const useFirestore = <T>(collectionName: string) => {
  const { firestore } = useFirebase()

  async function getDocuments(userId: string) {
    const snapshot = await getDocs(query(collection(firestore, collectionName), where('userId', '==', userId)))

    return snapshot
      .docs
      .map((doc) => ({ ...doc.data(), id: doc.id })) as T[]
  }

  async function addDocument(data: object) {
    const docRef = await addDoc(collection(firestore, collectionName), data)

    return { ...data, id: docRef.id } as T
  }

  async function updateDocument(id: string, updates: object) {
    await updateDoc(doc(firestore, collectionName, id), updates)
  }

  async function deleteDocument(id: string) {
    await deleteDoc(doc(firestore, collectionName, id))
  }

  return {
    getDocuments,
    addDocument,
    updateDocument,
    deleteDocument,
  }
}
