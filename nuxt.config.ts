// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Jun-Hong Cheng'
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    'nuxt-headlessui',
    '@vee-validate/nuxt'
  ],
  typescript: {
    typeCheck: true,
    strict: true
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  i18n: {
    vueI18n: './i18n.config.ts'
  }
})
