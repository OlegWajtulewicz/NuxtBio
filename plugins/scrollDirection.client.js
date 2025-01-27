 import jQuery from 'jquery'
const $ = jQuery

export default defineNuxtPlugin((nuxtApp) => {
  function initCheckScrollUpDown() {
    let lastScrollTop = 0
    const threshold = 150

    function startCheckScroll() {
      window.addEventListener('scroll', () => {
        const nowScrollTop = window.pageYOffset || document.documentElement.scrollTop

        if (Math.abs(lastScrollTop - nowScrollTop) >= threshold) {
          if (nowScrollTop > lastScrollTop) {
            document.querySelector('.wrapper').classList.add('scroll-direction-down')
            document.querySelector('header').classList.add('scroll-direction-down')
          } else {
            document.querySelector('.wrapper').classList.remove('scroll-direction-down')
            document.querySelector('header').classList.remove('scroll-direction-down')
          }
          lastScrollTop = nowScrollTop

          if (nowScrollTop > threshold) {
            document.querySelector('.wrapper').classList.add('scroll-scrolled')
            document.querySelector('header').classList.add('scroll-scrolled')
            document.querySelector('header').classList.remove('nav-see-through')
          } else {
            document.querySelector('.wrapper').classList.remove('scroll-scrolled')
            document.querySelector('header').classList.remove('scroll-scrolled')
            document.querySelector('header').classList.add('nav-see-through')
          }
        }
      })
    }

    if (process.client) {
      window.addEventListener('load', startCheckScroll)
      nuxtApp.hook('page:finish', startCheckScroll)
    }
  }

  initCheckScrollUpDown()
})