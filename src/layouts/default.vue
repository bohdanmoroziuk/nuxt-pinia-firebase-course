<template>
  <div>
    <header class="bg-purple-500 text-white p-4 flex items-center justify-between">
      <NuxtLink to="/">
        <h1 class="text-xl font-semibold">
          Habit Tracker
        </h1>
      </NuxtLink>
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
