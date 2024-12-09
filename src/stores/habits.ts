import { format, differenceInDays } from 'date-fns'

export type Habit = {
  id: string;
  name: string;
  completions: string[];
  streak: number;
}

export const useHabitStore = defineStore('habits', () => {
  const { getUserId } = useAuth()

  const { getDocuments, addDocument, updateDocument, deleteDocument } = useFirestore<Habit>('habits')

  const habits = ref<Habit[]>([])

  async function fetchHabits() {
    habits.value = await getDocuments(getUserId()!)
  }

  async function addHabit(name: string) {
    const data = {
      name,
      completions: [],
      streak: 0,
      userId: getUserId()!,
    }

    const habit = await addDocument(data)

    habits.value.push(habit)
  }

  async function updateHabit(id: string, updates: Partial<Habit>) {
    await updateDocument(id, updates)

    habits.value = habits.value.map((habit) => {
      return habit.id === id
        ? { ...habit, ...updates }
        : habit
    })
  }

  async function deleteHabit(id: string) {
    await deleteDocument(id)

    habits.value = habits.value.filter((habit) => habit.id !== id)
  }

  async function toggleHabitCompletion(id: string) {
    const habit = habits.value.find((habit) => habit.id === id)

    if (habit === undefined) return

    const today = format(new Date(), 'yyyy-MM-dd')

    const completions = habit.completions.includes(today)
      ? habit.completions.filter((date) => date !== today)
      : habit.completions.concat(today)

    const streak = calculateHabitStreak(completions)

    await updateHabit(id, { completions, streak })
  }

  function calculateHabitStreak(completions: string[]) {
    const dateStrings = completions
      .slice()
      .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())

    let streak = 0
    let currentDate = new Date()

    for (const dateString of dateStrings) {
      const date = new Date(dateString)
      const difference = differenceInDays(currentDate, date)

      if (difference > 1) {
        break
      }

      streak += 1
      currentDate = date
    }

    return streak
  }

  return {
    habits,
    fetchHabits,
    addHabit,
    updateHabit,
    deleteHabit,
    toggleHabitCompletion,
  }
})