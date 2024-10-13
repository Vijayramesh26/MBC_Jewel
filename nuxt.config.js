export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    "vuetify/styles/main.sass",
    "@mdi/font/css/materialdesignicons.css"
  ],

  build: {
    transpile: ["vuetify"],

  },
  devServer: {
    port: 8080,
  },
  compatibilityDate: "2024-07-21"
})