// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
   enabled: true,

   timeline: {
    enabled: true,
   },
  },
  compatibilityDate: "2024-12-18",
  pages: true,
  modules: [
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
    '@nuxt/ui',
    '@nuxtjs/i18n'
  ],
  i18n: {
    vueI18n: './i18n.config.js',
    locales: ['en', 'ru', 'pl'],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_locale',
      redirectOn: 'no_prefix',
      alwaysRedirect: false,
      cookieDomain: null,
      cookieSecure: false
     // cookieKey: 'i18n_redirected',
    }
  },
  plugins: [
    { src: '~/plugins/lazyLoad.js', mode: 'client' },
    { src: '~/plugins/mouseCursor.client.js', mode: 'client' },
   // { src: '~/plugins/locomotiveScroll.client.js', mode: 'client' },
    { src: '~/plugins/scrollDirection.client.js', mode: 'client' },
    { src: '~/plugins/hamburgerNav.client.js', mode: 'client' },
    { src: '~/plugins/seo.client.js', mode: 'client' },
    { src: '~/plugins/gsap.client.js', mode: 'client' }
  ],
  googleFonts: {
    families: {
      'Space+Mono': [400, 700],
      'Open+Sans': [300, 400, 500, 600, 700, 800],
      'Montserrat': [100, 200, 300, 400, 500, 600, 700, 900],
      'Decoy': [100, 200, 300, 400, 500, 600, 700, 900],
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
            @use "./assets/styles/utils/_functions" as *;
            @use "./assets/styles/utils/_vars" as *;
            @use "./assets/styles/mixins" as *;
          `
        }
      }
    },
    assetsInclude: ['**/*.woff', '**/*.woff2', '**/*.ttf', '**/*.eot'],
    build: {
      assetsDir: '_nuxt',
      manifest: true,
      rollupOptions: {
        output: {
          assetFileNames: '_nuxt/[name].[hash][extname]',
          chunkFileNames: '_nuxt/[name].[hash].js',
          entryFileNames: '_nuxt/[name].[hash].js'
        }
      }
    }
  },
  build: {
    transpile: ['gsap'],
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    baseURL: '/nuxtbio/',
    buildAssetsDir: '_nuxt',
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
        { property: 'twitter:image', content: 'https://vaitulevichaleh.com/Portfolio.PNG' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Aleh Vaitulevich' }
      ],
      link: [
        // Favicons
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/nuxtbio/favicon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/nuxtbio/favicon/favicon-96x96.png' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxtbio/favicon/favicon.svg' },
        { rel: 'shortcut icon', href: '/nuxtbio/favicon/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      ],
      style: [
       // { children: 'body{opacity: 0;}' }
      ],
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
          body: true,
          defer: false // убираем defer
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js',
          body: true,
          defer: false // убираем defer
        }
      ]
    },
    image: {
      quality: 80,
      format: ['webp'],
      dir: '/img'
    }
  },
  imports: {
        dirs: ['stores', 'utils', 'animation'],
  },
  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true,
  },
  routeRules: {
    // Кэширование статических страниц
    '/**': { swr: 3600 },
    // Кэширование API
    '/api/**': { swr: 600 },
  },
  ssr: false,
  nitro: {
    preset: 'netlify-static',
    baseURL: '/nuxtbio',
    prerender: {
      crawlLinks: true,
      routes: [
        '/'
      ]
    },
    static: true,
    serveStatic: true
  },
  generate: {
    fallback: 'index.html'
  }
})