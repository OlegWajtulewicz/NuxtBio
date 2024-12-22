import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LocomotiveScroll from 'locomotive-scroll'

let scroll = null

export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(ScrollTrigger)

  function initCheckScrollUpDown() {
    var lastScrollTop = 0
    var threshold = 150

    function startCheckScroll() {
      scroll.on('scroll', (instance) => {
        var nowScrollTop = instance.scroll.y
        const wrapper = document.querySelector('.wrapper')
        const header = document.querySelector('header')

        if (Math.abs(lastScrollTop - nowScrollTop) >= threshold) {
          if (nowScrollTop > lastScrollTop) {
            wrapper?.classList.add('scroll-direction-down')
            header?.classList.add('scroll-direction-down')
          } else {
            wrapper?.classList.remove('scroll-direction-down')
            header?.classList.remove('scroll-direction-down')
          }
          lastScrollTop = nowScrollTop

          if (nowScrollTop > threshold) {
            wrapper?.classList.add('scroll-scrolled')
            header?.classList.add('scroll-scrolled')
            header?.classList.remove('nav-see-through')
          } else {
            wrapper?.classList.remove('scroll-scrolled')
            header?.classList.remove('scroll-scrolled')
            header?.classList.add('nav-see-through')
          }
        }
      })
    }

    startCheckScroll()
  }

  function initSmoothScroll(container) {
    if (scroll) {
      scroll.destroy()
      scroll = null
    } 

    scroll = new LocomotiveScroll({
      el: container.querySelector('[data-scroll-container]'),
      smooth: true,
      multiplier: 1,
      lerp: 0.1,
      class: "is-inview",
      scrollFromAnywhere: true,
      touchMultiplier: 3,
      smartphone: {
        smooth: true
      },
      tablet: {
        smooth: true
      }
    })

    window.onresize = () => scroll.update()

    scroll.on("scroll", () => ScrollTrigger.update())

    ScrollTrigger.scrollerProxy('[data-scroll-container]', {
      scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y
      },
      getBoundingClientRect() {
        return {
          top: 0, 
          left: 0, 
          width: window.innerWidth, 
          height: window.innerHeight
        }
      },
      pinType: container.querySelector('[data-scroll-container]').style.transform ? "transform" : "fixed"
    })

    ScrollTrigger.defaults({
      scroller: document.querySelector('[data-scroll-container]')
    })

    ScrollTrigger.addEventListener('refresh', () => scroll.update())
    ScrollTrigger.refresh()

    initCheckScrollUpDown()
  }

  nuxtApp.hook('app:mounted', () => {
    initSmoothScroll(document.body)
  })

  nuxtApp.hook('app:beforeMount', () => {
    if (scroll) {
      scroll.destroy()
      scroll = null
    }
  })

  const locomotiveScroll = {
    stop() {
      if (scroll && scroll.stop) {
        scroll.stop()
        document.querySelector('[data-scroll-container]').style.overflow = 'hidden'
      }
    },
    start() {
      if (scroll && scroll.start) {
        scroll.start()
        document.querySelector('[data-scroll-container]').style.overflow = ''
      }
    },
    scrollTo(target, options) {
      if (scroll && scroll.scrollTo) {
        scroll.scrollTo(target, options)
      }
    },
    update() {
      if (scroll && scroll.update) {
        scroll.update()
      }
    }
  }

  return {
    provide: {
      locomotiveScroll: locomotiveScroll
    }
  }
}) 