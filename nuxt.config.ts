// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  srcDir: "",
  css: ['~/assets/css/tailwind.css', '/assets/css/styles.css', 'primeicons/primeicons.css'],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config.js',
        exposeConfig: true,
        injectPosition: 0,
        viewer: true,
      },
      autoprefixer: {},
    },
  },
  modules: [
    '@primevue/nuxt-module',
    "@nuxt/image",
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    "@nuxtjs/seo"
  ],
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('ion-'),
    },
  },
  robots: {
    allow: '/',
    sitemap: 'https://shauryam.vercel.app/sitemap.xml'
  }
});