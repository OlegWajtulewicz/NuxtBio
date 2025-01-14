// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-12-18",
  pages: true,
  modules: [
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt'
  ],
  plugins: [
    { src: '~/plugins/lazyLoad.js', mode: 'client' },
    { src: '~/plugins/mouseCursor.client.js', mode: 'client' },
    { src: '~/plugins/locomotiveScroll.client.js', mode: 'client' },
    { src: '~/plugins/hamburgerNav.client.js', mode: 'client' }
  ],
  googleFonts: {
    families: {
      'Space+Mono': [400, 700],
      'Open+Sans': [300, 400, 500, 600, 700, 800],
      'Montserrat': [100, 200, 300, 400, 500, 600, 700, 900],
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true,
  },
  css: [
    '@/assets/styles/variables.scss',
    '@/assets/styles/index.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/styles/utils/_vars" as *;
            @use "@/assets/styles/utils/_functions" as *;
            @use "@/assets/styles/mixins" as *;
          `
        }
      }
    },
    assetsInclude: ['**/*.woff', '**/*.woff2', '**/*.ttf', '**/*.eot'],
  },
  build: {
    transpile: ['gsap', 'three'],
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'UTF-8' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'Delivering tailor-made digital designs and building interactive websites.' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://vaitulevichaleh.com' },
        { property: 'og:title', content: 'Aleh Vaitulevich • Freelance Developer' },
        { property: 'og:description', content: 'Delivering tailor-made digital designs and building interactive websites.' },
        { property: 'og:image', content: 'https://vaitulevichaleh.com/Portfolio.PNG' },
        { property: 'og:locale', content: 'en' },
        { property: 'og:site_name', content: 'Aleh Vaitulevich' },
        
        // Twitter
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://vaitulevichaleh.com' },
        { property: 'twitter:title', content: 'Aleh Vaitulevich • Freelance Developer' },
        { property: 'twitter:description', content: 'Delivering tailor-made digital designs and building interactive websites.' },
        { property: 'twitter:image', content: 'https://vaitulevichaleh.com/Portfolio.PNG' }
      ],
      link: [
        // Favicons
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/favicon/favicon-48x48.png' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
        // Locomotive Scroll CSS
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.3/dist/locomotive-scroll.min.css' }
      ],
      style: [
       // { children: 'body{opacity: 0;}' }
      ],
      script: []
    }
  }
})