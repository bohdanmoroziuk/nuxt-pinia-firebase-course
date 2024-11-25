// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  srcDir: 'src/',
  devtools: {
    enabled: true,
  },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
})
