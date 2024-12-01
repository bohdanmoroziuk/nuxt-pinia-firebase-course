import { getDocs, addDoc, collection } from 'firebase/firestore'

export type Habit = {
  id: string;
  name: string;
  completions: string[];
  streak: number;
}

export const useHabitStore = defineStore('habits', () => {
  const { $firestore } = useNuxtApp()

  const habits = ref<Habit[]>([])

  async function fetchHabits() {
    const snapshot = await getDocs(collection($firestore, 'habits'))

    habits.value = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    } as Habit))
  }

  async function addHabit(name: string) {
    const habit = {
      name,
      completions: [],
      streak: 0,
    }

    const docRef = await addDoc(collection($firestore, 'habits'), habit)

    habits.value.push({ id: docRef.id, ...habit })
  }

  return {
    habits,
    fetchHabits,
    addHabit,
  }
})