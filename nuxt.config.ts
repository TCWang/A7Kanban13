// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image-edge", "@vueuse/nuxt", "@nuxtjs/tailwindcss"],
  css: ["@/assets/css/tailwind.css"],

  app: {
    head: {
      title: "A7社區網站-生活指引",
      meta: [
        {
          name: "description",
          content: "A7新林口-社區網站 V2.0 13 生活指引",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
});
