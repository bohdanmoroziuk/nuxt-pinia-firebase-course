<script setup lang="ts">
definePageMeta({
  middleware: ['guest'],
})

const { signup } = useAuthStore()

const email = ref('')
const password = ref('')
const error = ref('')

const handleSignup = async () => {
  try {
    error.value = ''

    await signup(email.value, password.value)
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
          Sign Up
        </h2>

        <form @submit.prevent="handleSignup">
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
            Sign up
          </button>

          <div class="text-center">
            <span>
              Already have an account?
            </span>
            <NuxtLink class="text-purple-500 hover:underline" to="/login">Log in</NuxtLink>
          </div>

          <template v-if="error">
            <p class="text-red-500 mt-4 text-center text-re">
              {{ error }}
            </p>
          </template>
        </form>
      </div>
    </div>
  </GuestOnly>
</template>
