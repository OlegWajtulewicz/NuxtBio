/*import Lenis from '@studio-freight/lenis'

export default defineNuxtPlugin((nuxtApp) => {
  const { initLenis } = useLenis()

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
    wheelMultiplier: 1,
    lerp: 0.1,
    syncTouch: true
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  if (process.client) {
    requestAnimationFrame(raf)
  }

  initLenis(lenis)
  nuxtApp.provide('lenis', lenis)
})
*/