<script setup lang="ts">
import { format } from 'date-fns'

type Props = {
  habit: Habit;
}

type Emits = {
  'toggle': [];
  'delete': [];
}

const props = defineProps<Props>()

const emit = defineEmits<Emits>()

const checked = computed(() => {
  return props.habit.completions.includes(format(new Date(), 'yyyy-MM-dd'))
})
</script>

<template>
  <div class="bg-white px-3 py-2 rounded-sm">
    <div class="flex items-center justify-between mb-4">
      <p
        class="text-purple-500 font-bold"
        :class="{ 'line-through': checked }"
      >
        {{ habit.name }}
      </p>
      <button
        class="text-gray-800"
        @click="emit('delete')"
        >
        Delete
      </button>
    </div>

    <div class="flex items-center">
      <input
        class="mr-2 accept-purple-500"
        type="checkbox"
        :checked="checked"
        @change="emit('toggle')"
      />
      <p class="text-sm text-gray-500">
        I did this today
      </p>
    </div>

    <p class="text-sm text-gray-500 mt-2">
      Current streak: {{ habit.streak }} days.
    </p>
  </div>
</template>
