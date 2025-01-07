import LocomotiveScroll from 'locomotive-scroll'

export default defineNuxtPlugin(() => {
  if (process.client) {
    window.addEventListener('load', () => {
      const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        getSpeed: true,
        getDirection: true,
        useKeyboard: true
      })
      
      // Сохраняем instance в window
      window.locomotiveScroll = scroll
    })
  }
}) 