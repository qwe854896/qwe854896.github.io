<script setup lang="ts">
import { ref } from 'vue'

const header = ref('Home')
const toggleMenu = () => {
  console.log('Menu toggled')
}
</script>

<template>
  <div class="sticky top-0 z-10 h-16 border-b bg-white lg:py-2.5">
    <div class="flex items-center justify-between space-x-4 px-6 2xl:container">
      <h5 hidden class="text-2xl font-medium text-gray-600 lg:block">
        {{ header }}
      </h5>
      <button class="-mr-2 h-16 w-12 border-r lg:hidden" @click="toggleMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="my-auto h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
