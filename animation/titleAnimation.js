import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Анимация для главной страницы
export const titleAnimation = (container = '.home') => {
  const titles = gsap.utils.toArray(`${container} .home__text > *`)
  
  // Настройки скорости для каждого элемента
  const speeds = [
    { y: 300 },  // "Creative" - самый быстрый
    { y: 150 },  // Canvas - медленнее
    { y: 550 },  // "web" - средняя скорость
    { y: 400 }   // "development" - быстрее чем web, но медленнее Creative
  ]
  
  titles.forEach((title, index) => {
    gsap.to(title, {
      y: speeds[index].y,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: 1,
       // markers: true
      }
    })
  })
}

// Анимация для PageHead
//export const pageHeadAnimation = (container = '.home') => {
//  const text = document.querySelector(`${container} .home__text`)
//  if (!text) return

 // ScrollTrigger.create({
//    trigger: container,
 //   start: "top top",
 //   end: "bottom top",
 //   scrub: 1,
 //   onUpdate: (self) => {
  //    const progress = self.progress
  //    gsap.to(text, {
  //      y: progress * 200,
  //    })
  //  }
  //})
//} 