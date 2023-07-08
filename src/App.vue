<script setup lang="ts">
import { RouterView } from 'vue-router'

import TheNavbar from './components/TheNavbar.vue'
import TheSidebar from './components/TheSidebar.vue'
</script>

<template>
  <TheSidebar />
  <div class="mb-6 ml-auto lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
    <TheNavbar />

    <div class="px-6 pt-6 2xl:container">
      <RouterView />
    </div>
  </div>
</template>
