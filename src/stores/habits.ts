import { getDocs, addDoc, updateDoc, deleteDoc, doc, collection } from 'firebase/firestore'
import { format } from 'date-fns'

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

  async function updateHabit(id: string, updates: Partial<Habit>) {
    const docRef = doc($firestore, 'habits', id)

    await updateDoc(docRef, updates)

    habits.value = habits.value.map((habit) => {
      return habit.id === id
        ? { ...habit, ...updates }
        : habit
    })
  }

  async function deleteHabit(id: string) {
    const docRef = doc($firestore, 'habits', id)

    await deleteDoc(docRef)

    habits.value = habits.value.filter((habit) => habit.id !== id)
  }

  async function toggleCompletion(id: string) {
    const habit = habits.value.find((habit) => habit.id === id)

    if (habit === undefined) return

    const today = format(new Date(), 'yyyy-MM-dd')

    const completions = habit.completions.includes(today)
      ? habit.completions.filter((date) => date !== today)
      : habit.completions.concat(today)

    await updateHabit(id, { completions })
  }

  return {
    habits,
    fetchHabits,
    addHabit,
    updateHabit,
    deleteHabit,
    toggleCompletion,
  }
})