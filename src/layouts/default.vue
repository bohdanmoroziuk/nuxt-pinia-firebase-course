<script setup lang="ts">
const { logout } = useAuthStore()
</script>

<template>
  <div>
    <header class="bg-purple-500 text-white p-4 flex items-center justify-between">
      <NuxtLink to="/">
        <h1 class="text-xl font-semibold">
          Habit Tracker
        </h1>
      </NuxtLink>

      <div class="flex items-center space-x-4">
        <UserOnly>
          <button
            class="bg-gray-100 text-black px-3 py-1"
            @click="logout"
          >
            Logout
          </button>
        </UserOnly>

        <GuestOnly>
          <div class="space-x-4">
            <NuxtLink
              class="hover:underline"
              to="/login"
            >
              Log in
            </NuxtLink>
            <NuxtLink
              class="hover:underline"
              to="/signup"
            >
              Sign up
            </NuxtLink>
          </div>
        </GuestOnly>
      </div>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="css">
body {
  background-color: #f1f1f1;
}
</style>
