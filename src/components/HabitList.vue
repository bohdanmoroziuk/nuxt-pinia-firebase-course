<template>
  <div>
    <ul class="space-y-4">
      <li class="bg-white px-3 py-2 rounded-sm">
        <div class="flex items-center justify-between mb-4">
          <p class="text-purple-500 font-bold">
            Habit name
          </p>
          <button class="text-gray-800">
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
          Current streak: 0 days.
        </p>
      </li>
    </ul>
  </div>
</template>