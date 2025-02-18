import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    // Регистрируем плагин
    gsap.registerPlugin(ScrollTrigger)
    
    // Добавляем в window для доступа из компонентов
    window.gsap = gsap
    window.ScrollTrigger = ScrollTrigger

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
