import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    // Регистрируем плагин глобально
    window.gsap = gsap
    window.ScrollTrigger = ScrollTrigger
    gsap.registerPlugin(ScrollTrigger)

    // Добавляем в контекст приложения
    nuxtApp.vueApp.provide('gsap', gsap)
    nuxtApp.vueApp.provide('ScrollTrigger', ScrollTrigger)

    return {
      provide: {
        gsap,
        ScrollTrigger
      }
    }
  }
})

//export default defineNuxtPlugin(async () => {
//	if (import.meta.client) {
//		gsap.registerPlugin(ScrollTrigger)
//	}
//})
