<script setup lang="ts">
type Props = {
  habits: Habit[];
}

type Emits = {
  'delete-habit': [id: string];
}

const props = defineProps<Props>()

const emit = defineEmits<Emits>()

const deleteHabit = (id: string) => {
  emit('delete-habit', id)
}
</script>

<template>
  <div>
    <ul class="space-y-4">
      <li
        v-for="habit of habits"
        :key="habit.id"
        class="bg-white px-3 py-2 rounded-sm"
      >
        <div class="flex items-center justify-between mb-4">
          <p class="text-purple-500 font-bold">
            {{ habit.name }}
          </p>
          <button
            class="text-gray-800"
            @click="deleteHabit(habit.id)"
            >
            Delete
          </button>
        </div>

        <div class="flex items-center">
          <input
            class="mr-2 accept-purple-500"
            type="checkbox"
          />
          <p class="text-sm text-gray-500">
            I did this today
          </p>
        </div>

        <p class="text-sm text-gray-500 mt-2">
          Current streak: {{ habit.streak }} days.
        </p>
      </li>
    </ul>
  </div>
</template>
