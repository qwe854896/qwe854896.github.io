<script setup lang="ts">
import { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables'

import { useI18n } from 'vue-i18n'
const { locale, locales, setLocale } = useI18n()

const localeCode = ref('')
onMounted(() => {
  localeCode.value = locale.value
})

watch(localeCode, () => {
  setLocale(localeCode.value)
})
</script>

<template>
  <form>
    <label class="text-gray-600">{{ $t('language') }}</label>
    <select
      v-model="localeCode"
      :title="$t('language')"
      class="ml-4 font-bold text-gray-800"
    >
      <option
        v-for="localeItem in locales"
        :key="(localeItem as LocaleObject).code"
        :value="(localeItem as LocaleObject).code"
      >
        {{ (localeItem as LocaleObject).name }}
      </option>
    </select>
  </form>
</template>
