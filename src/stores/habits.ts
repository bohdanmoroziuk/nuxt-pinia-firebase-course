export const useHabitStore = defineStore('habits', () => {
  const habits = ref([])

  return {
    habits,
  }
})