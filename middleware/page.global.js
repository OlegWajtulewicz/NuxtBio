import { useNuxtApp } from '#app'

export default defineNuxtRouteMiddleware((to, from) => {
	const nuxtApp = useNuxtApp()

	if (!from.meta.pageTransition) {
		from.meta.pageTransition = {}
	}
	if (!to.meta.pageTransition) {
	to.meta.pageTransition = {}
	}
	from.meta.pageTransition.onLeave = (el, done) => {
		general.isTransitionFinish = false
		general.isTransitionStart = true
		general.scrollLenis.stop()

		let tl = gsap.timeline({
			onComplete() {
				// Очищаем свойства всех элементов
				gsap.set([
					el,
					el.querySelector('.transition__screen'),
					el.querySelector('.transition__rounded-wrap'),
					el.querySelector('.transition__fade')
				], {
					clearProps: 'all'
				})

				ScrollTrigger.getAll().filter(st => {
					if(from.name === 'work-slug') {
						if(st.trigger && st.trigger.closest('.product')) {
							console.log('ok');
							st.kill()
						}
					} else {
						if(st.trigger && st.trigger.closest(`.${from.name}`)) {
							st.kill()
						}
					}
				})
				//ScrollTrigger.getAll().filter(st => {
				//	if(st.trigger && st.trigger.closest(`.${from.name}`)) {
				//		st.kill()  console.log('ok');
				done()
			}
		})


		// Анимация перехода 
		if (window.innerWidth > 1024) {
			tl.to(".wrapper", {
			scale: 1,
			height: "100%",
			opacity: 0,
			})
		} else {
			tl.to(".wrapper", { opacity: 0 })
		}
	}

	to.meta.pageTransition.onEnter = (el, done) => {
		let tl = gsap.timeline({
			onComplete() {
				gsap.set(el,  {
					clearProps: 'all'
				})
				general.isTransitionFinish = true
				general.isTransitionStart = false
				general.scrollLenis.start()
				nuxtApp.$mouseCursor?.initStickyCursorWithDelay()
				done()
			}
		})

		
		if (window.innerWidth > 1024) {
			tl.to(".wrapper", {
			scale: 1,
			height: "100%",
			opacity: 1,
			clearProps: "all"
			}, "+=.1")
		} else {
			tl.to(".wrapper", { 
				opacity: 1, 
				clearProps: "all" 
			}, "+=.1")
		}
	}
})