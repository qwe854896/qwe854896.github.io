<script setup lang="ts">
const props = defineProps<{ isOpen: boolean; onClose: () => void }>()
const close = () => {
  props.onClose()
}
</script>

<template>
  <aside
    class="fixed left-0 top-0 z-30 h-full w-64 transform overflow-auto bg-white p-5 transition-all duration-300 ease-in-out"
    :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <div class="close">
      <button
        title="close"
        class="absolute right-0 top-0 mr-4 mt-4"
        @click="close"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>

    <span class="flex w-full items-center border-b p-4" @click="close">
      <img
        src="@/assets/avatar.jpg"
        alt=""
        class="m-auto h-20 w-20 rounded-full object-cover lg:h-28 lg:w-28"
      />
    </span>

    <ul class="divide-y font-sans lg:mt-8 lg:space-y-2 lg:tracking-wide">
      <li>
        <NuxtLink
          to="/"
          class="group flex items-center space-x-4 rounded-md px-4 py-4 text-gray-600"
          @click="close"
        >
          <img
            src="@/assets/home.png"
            alt=""
            class="-ml-1 h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
          />
          <span
            class="group-hover:text-gray-700 group-active:-mr-1 group-active:font-medium"
            >Home</span
          >
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/about"
          class="group flex items-center space-x-4 rounded-md px-4 py-4 text-gray-600"
          @click="close"
        >
          <img
            src="@/assets/about.png"
            alt=""
            class="-ml-1 h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
          />
          <span class="group-hover:text-gray-700">About</span>
        </NuxtLink>
      </li>
    </ul>

    <div class="text-center">
      <LanguageSelection />
    </div>
    <div class="mt-3">
      <TheFollow />
    </div>
  </aside>
</template>

<style scoped lang="postcss">
.router-link-exact-active {
  @apply relative rounded-xl bg-gradient-to-r from-sky-600 to-cyan-400 text-white;
}
</style>
