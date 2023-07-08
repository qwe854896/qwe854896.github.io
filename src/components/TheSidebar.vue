<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <aside
    class="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]"
  >
    <div>
      <div class="mt-8 text-center">
        <img
          src="@/assets/avatar.jpg"
          alt=""
          class="m-auto h-10 w-10 rounded-full object-cover lg:h-28 lg:w-28"
        />
        <h5 class="mt-4 hidden text-xl font-semibold text-gray-600 lg:block">Jun-Hong Cheng</h5>
        <span class="hidden text-gray-400 lg:block">NYCU Student</span>
      </div>

      <ul class="mt-8 space-y-2 tracking-wide">
        <li>
          <RouterLink
            to="/"
            class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
          >
            <img
              src="@/assets/home.png"
              alt=""
              class="-ml-1 h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
            />
            <span class="group-hover:text-gray-700 group-active:-mr-1 group-active:font-medium"
              >Home</span
            >
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/about"
            class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
          >
            <img
              src="@/assets/about.png"
              alt=""
              class="-ml-1 h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
            />
            <span class="group-hover:text-gray-700">About</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
a.router-link-exact-active {
  @apply relative rounded-xl bg-gradient-to-r from-sky-600 to-cyan-400 text-white;
}
</style>
