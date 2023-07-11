<script setup lang="ts">
const isOpen = ref(false)

watch(isOpen, (isOpen) => {
  if (process.client) {
    if (isOpen) document.body.style.setProperty('overflow', 'hidden')
    else document.body.style.removeProperty('overflow')
  }
})

onMounted(() => {
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && isOpen.value) isOpen.value = false
  })
})

const drawer = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <nav class="fixed w-full bg-transparent p-6">
    <div class="flex items-center justify-between">
      <!-- Header logo -->
      <div>
        <img
          src="@/assets/avatar.jpg"
          alt=""
          class="m-auto h-10 w-10 rounded-full object-cover lg:h-28 lg:w-28"
        />
      </div>

      <!-- Mobile toggle -->
      <div class="lg:hidden">
        <button title="mobile-toggle" @click="drawer">
          <svg
            class="h-8 w-8 fill-current text-black"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Navbar -->
      <TheSidebar />

      <!-- Dark Background Transition -->
      <transition
        enter-from-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div
          v-show="isOpen"
          class="fixed inset-0 z-10 transition-opacity"
          @keydown.esc="isOpen = false"
        >
          <div
            class="absolute inset-0 bg-black opacity-50"
            tabindex="0"
            @click="isOpen = false"
          ></div>
        </div>
      </transition>

      <!-- Drawer Menu -->
      <TheDrawerMenu
        :is-open="isOpen"
        :on-close="
          () => {
            isOpen = false
          }
        "
      />
    </div>
  </nav>
</template>
