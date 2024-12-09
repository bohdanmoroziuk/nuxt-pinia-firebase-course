<script setup lang="ts">
definePageMeta({
  middleware: ['guest'],
})

const { login } = useAuthStore()

const email = ref('')
const password = ref('')
const error = ref('')

const handleLogin = async () => {
  try {
    error.value = ''

    await login(email.value, password.value)
  } catch (e) {
    error.value = (e as Error).message
  }
}
</script>

<template>
  <GuestOnly>
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
            class="w-full bg-purple-500 text-white py-2 mb-4 rounded-sm"
            type="submit"
          >
            Log in
          </button>

          <div class="text-center">
            <span>
              Don't have an account?
            </span>
            <NuxtLink class="text-purple-500 hover:underline" to="/signup">Sign up</NuxtLink>
          </div>

          <template v-if="error">
            <p class="text-red mt-4 text-center">
              {{ error }}
            </p>
          </template>
        </form>
      </div>
    </div>
  </GuestOnly>
</template>
