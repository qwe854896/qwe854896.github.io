<script setup>
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
})
</script>

<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir"></Html>
    <TheSidebar />
    <div class="mb-6 ml-auto lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <TheNavbar />
      <div class="px-6 pt-6 2xl:container">
        <slot />
      </div>
    </div>
  </div>
</template>
