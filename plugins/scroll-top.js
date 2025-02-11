export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    // Обработка завершения загрузки страницы
    nuxtApp.hook('page:finish', () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    })

    // Обработка навигации "назад"
    window.addEventListener('popstate', () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    })
  }
}) 