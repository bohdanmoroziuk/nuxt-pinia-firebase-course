<script setup lang="ts">
const email = ref('')
const password = ref('')

const handleLogin = () => {
  console.log(email.value, password.value)
}
</script>

<template>
  <div class="flex justify-center mt-10">
    <div class="w-full max-w-sm bg-white shadow-md rounded p-8">
      <h2 class="text-2xl text-gray-800 font-bold text-center mb-6">
        Log In
      </h2>

      <form @submit.prevent="handleLogin">
        <input
          class="w-full px-3 py-2 mb-4 border border-gray-300 rounded-sm"
          type="email"
          placeholder="Email"
          required
          v-model.trim="email"
        />

        <input
          class="w-full px-3 py-2 mb-4 border border-gray-300 rounded-sm"
          type="password"
          placeholder="Password"
          required
          v-model.trim="password"
        />

        <button
          class="w-full bg-purple-500 text-white py-2 rounded-sm"
          type="submit"
        >
          Log in
        </button>

        <p class="text-red mt-4 text-center">
          <!-- Error feedback -->
        </p>
      </form>
    </div>
  </div>
</template>
