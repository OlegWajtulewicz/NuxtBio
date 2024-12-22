import lazyLoad from '../directives/lazyLoad'

export default defineNuxtPlugin((nuxtApp) => {
  // Проверяем, что мы на клиенте
  if (process.client) {
    nuxtApp.vueApp.directive('lazy', lazyLoad)
  }
}) 