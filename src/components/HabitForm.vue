<script setup lang="ts">
import { ref } from 'vue'

type Emits = {
  'submit': [name: string]
}

const emit = defineEmits<Emits>()

const name = ref('')

const handleSubmit = () => {
  emit('submit', name.value)
  name.value = ''
}
</script>

<template>
  <form
    class="mb-6 flex items-center gap-2"
    @submit.prevent="handleSubmit"
  >
    <input
      class="w-full p-3 border border-gray-300 rounded-sm"
      type="text"
      placeholder="Enter a new habit..."
      required
      v-model.trim="name"
    />

    <button
      class="w-full p-3 bg-purple-500 text-white rounded-sm"
      type="submit"
    >
      Add habit
    </button>
  </form>
</template>