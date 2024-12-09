<script setup lang="ts">
type Props = {
  habits: Habit[];
}

type Emits = {
  'delete': [id: string];
  'toggle-completion': [id: string];
}

const props = defineProps<Props>()

const emit = defineEmits<Emits>()

const handleDelete = (id: string) => {
  emit('delete', id)
}

const handleCompletionToggle = (id: string) => {
  emit('toggle-completion', id)
}
</script>

<template>
  <div>
    <ul class="space-y-4">
      <li
        v-for="habit of habits"
        :key="habit.id"
      >
        <HabitListItem
          :habit="habit"
          @toggle="handleCompletionToggle(habit.id)"
          @delete="handleDelete(habit.id)"
        />
      </li>
    </ul>
  </div>
</template>
