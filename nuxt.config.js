// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-12-18",
  pages: true,
  modules: [
    ['@nuxt/image', {
      provider: 'static',
      dir: 'public',
      staticFilename: '[publicPath]/[name]-[hash][ext]'
    }],
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
    }
  },
  plugins: [
    { src: '~/plugins/lazyLoad.js', mode: 'client' },
    { src: '~/plugins/mouseCursor.client.js', mode: 'client' },
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
          additionalData: '@use "./assets/styles/utils/_functions" as *; @use "./assets/styles/utils/_vars" as *; @use "./assets/styles/mixins" as *;'
        }
      }
    },
    assetsInclude: ['**/*.woff', '**/*.woff2', '**/*.ttf', '**/*.eot'],
    build: {
      cssCodeSplit: false,
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
    transpile: ['gsap']
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    baseURL: '/',
    buildAssetsDir: '_nuxt',
    cdnURL: '',
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon/favicon-96x96.png' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      ],
      style: [
       // { children: 'body{opacity: 0;}' }
      ],
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
          type: 'text/javascript',
          body: true
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js',
          type: 'text/javascript',
          body: true
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
    payloadExtraction: false,
    inlineSSRStyles: true,
    renderJsonPayloads: false
  },
  routeRules: {
    '/': { static: true },
    '/about': { static: true },
    '/work': { static: true },
    '/work/**': { static: true },
    '/privacy': { static: true },
    '/cookie': { static: true },
    // Кэширование статических страниц
    '/**': { swr: 3600 },
    // Кэширование API
    '/api/**': { swr: 600 },
  },
  ssr: true,
  target: 'static',
  nitro: {
    preset: 'netlify',
    static: true,
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/about',
        '/work',
        '/privacy',
        '/cookie'
      ]
    },
    output: {
      publicDir: 'dist'
    },
    timing: true,
    serveStatic: true
  },
  generate: {
    fallback: '404.html'
  },
  runtimeConfig: {
    public: {
      baseURL: ''
    }
  }
})