import Lenis from '@studio-freight/lenis'

export const useSmoothScroll = () => {

	general.scrollLenis = new Lenis({
		duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',           // Основной параметр направления
    smooth: true,                    // Включаем плавный скролл
    wheelMultiplier: 1,             // Множитель для колеса мыши
    touchMultiplier: 2,             // Множитель для тач-устройств
    lerp: 0.1,                      // Коэффициент интерполяции
    smoothTouch: false,             // Отключаем сглаживание для тач-устройств
    infinite: false 
	})

	general.scrollLenis.on('scroll', ScrollTrigger.update)

	gsap.ticker.add((time)=>{
		general.scrollLenis.raf(time * 5000)
	})

	gsap.ticker.lagSmoothing(0)
	general.scrollLenis.scrollTo(0)
}