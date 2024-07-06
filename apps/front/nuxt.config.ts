// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-monaco-editor", "@nuxtjs/tailwindcss"],
  css: [
    '~/assets/css/tailwind.css',
    'highlight.js/styles/github.css' // ここでhighlight.jsのスタイルもインポート
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
