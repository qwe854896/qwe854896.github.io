<script setup lang="ts">
import { RouterView } from 'vue-router'

import TheNavbar from './components/TheNavbar.vue'
import TheSidebar from './components/TheSidebar.vue'
</script>

<template>
  <TheSidebar />
  <div>
    <TheNavbar />
    <RouterView />
  </div>
</template>
