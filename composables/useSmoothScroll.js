import Lenis from '@studio-freight/lenis'

export const useSmoothScroll = () => {
	general.scrollLenis = new Lenis({
		duration: 1.2,
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		direction: 'vertical',           
		smooth: true,                    
		wheelMultiplier: 1,             
		touchMultiplier: 2,             
		lerp: 0.1,                      
		smoothTouch: false,             
		infinite: false,
		gestureOrientation: 'vertical',
		normalizeWheel: true,
		smoothWheel: true
	})

	general.scrollLenis.on('scroll', ScrollTrigger.update)

	const raf = (time) => {
		general.scrollLenis.raf(time * 1000)
	}

	gsap.ticker.add(raf)
	gsap.ticker.lagSmoothing(0)
	general.scrollLenis.scrollTo(0)

	return general.scrollLenis
}