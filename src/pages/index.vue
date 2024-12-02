<script setup lang="ts">
import HabitForm from '~/components/HabitForm.vue'
import HabitList from '~/components/HabitList.vue'

const habitStore = useHabitStore()
const { habits } = storeToRefs(habitStore)
const { fetchHabits, addHabit, deleteHabit, toggleHabitCompletion } = habitStore

onMounted(fetchHabits)
</script>

<template>
  <div class="mx-auto p-6 max-w-2xl">
    <h1 class="text-4xl font-bold text-center mb-8">
      Habit Tracker
    </h1>
    <HabitForm @submit="addHabit" />
    <HabitList
      :habits="habits"
      @delete="deleteHabit"
      @toggle-completion="toggleHabitCompletion"
    />
  </div>
</template>

<style lang="css">
body {
  background-color: #f1f1f1;
}
</style>
