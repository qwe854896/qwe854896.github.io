<script setup lang="ts">
// import { useI18n } from 'vue-i18n'
// const { locale, getLocaleCookie } = useI18n()

// const defaultLocaleCode = locale.value

// if (process.client) {
//   locale.value = getLocaleCookie() ?? defaultLocaleCode
// }
</script>

<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
