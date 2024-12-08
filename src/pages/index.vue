<script setup lang="ts">
import HabitForm from '~/components/HabitForm.vue'
import HabitList from '~/components/HabitList.vue'

definePageMeta({
  middleware: ['auth'],
})

const habitStore = useHabitStore()
const { habits } = storeToRefs(habitStore)
const { fetchHabits, addHabit, deleteHabit, toggleHabitCompletion } = habitStore

onMounted(fetchHabits)
</script>

<template>
  <div class="mx-auto p-6 max-w-2xl">
    <HabitForm @submit="addHabit" />
    <HabitList
      :habits="habits"
      @delete="deleteHabit"
      @toggle-completion="toggleHabitCompletion"
    />
  </div>
</template>
