module.exports = {
  apps: [
    {
      name: 'NuxtBio',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      env: {
        NODE_ENV: 'production',
        NITRO_HOST: '94.130.167.163',
        NITRO_PORT: 3000,
        BASE_URL: '/nuxtbio',
        NITRO_PRESET: 'node-server',
        NUXT_APP_BASE_URL: '/nuxtbio/'
      }
    }
  ]
} 