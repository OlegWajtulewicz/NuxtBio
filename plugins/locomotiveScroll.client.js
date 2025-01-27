/*import LocomotiveScroll from 'locomotive-scroll'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    let scroll = null

    // Функция инициализации скролла
    function initScroll() {
      scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        getSpeed: true,
        getDirection: true,
        useKeyboard: true
      })
      
      window.locomotiveScroll = scroll
      nuxtApp.provide('locomotiveScroll', scroll)
    }

    // Инициализация при загрузке
    window.addEventListener('load', initScroll)

    // Переинициализация при смене страницы
    nuxtApp.hook('page:finish', () => {
      if (scroll) scroll.destroy()
      initScroll()
    })
  }
}) 
*/