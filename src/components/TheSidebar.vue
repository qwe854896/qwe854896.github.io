<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <aside class="sidebar" :class="{ active: isOpen }">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="@/assets/avatar.jpg" alt="Photo" width="80" />
      </figure>

      <div class="info-content">
        <h1 class="name" title="Jun-Hong Cheng">Jun-Hong Cheng</h1>
      </div>
    </div>
  </aside>
</template>
