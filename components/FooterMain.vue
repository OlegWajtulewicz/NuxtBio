<script setup>
import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

gsap.registerPlugin(ScrollTrigger)

// Интервал для обновления времени
let timeInterval

// Функция для обновления времени

function getTimeMillis() {
  const myTime = document.querySelector(".time-millisec")
  if (!myTime) return
  
  const date = new Date()
  const time = date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    fractionalSecondDigits: '1' // Добавляет 1 цифру миллисекунд
  })
  
  myTime.innerText = time
}

onMounted(() => {
  // Инициализация GSAP анимации
  if (window.innerWidth > 900 && document.querySelector('.right-footer__logo')) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.footer',
        start: "top bottom",
        end: "bottom 95%",
        scrub: 1,
      //  markers: true,
      },
    });
    
    tl.to('.right-footer__logo--v', {
      yPercent: -120,
      rotate: 0,
      ease: "power1.inOut",
    }, 0) 
    
    .to('.right-footer__logo--a', {
      yPercent: -120,
      rotate: 0,
      ease: "power1.inOut",
    }, "-=0.4")
  }

  // Инициализация таймера
  if (document.querySelector(".time-millisec")) {
    timeInterval = setInterval(getTimeMillis, 100) // Обновляем каждые 100мс для плавности
  }
})

// Очищаем интервал при размонтировании компонента
onUnmounted(() => {
  if (timeInterval) {
    clearInterval(timeInterval)
  }
})
</script>

<template>
    <footer class="footer" id="footer"  data-scroll-section>
  
  <div class="footer__container" data-scroll data-scroll-speed="-7.5" data-scroll-position="bottom" data-scroll-offset="-50%, 0%">
    
    <div class="footer__wrapper">
        <div class="footer__title"><span class="footer__divider">•</span>Let's talk</div>
        <div class="footer__line"></div>  
        <a href="mailto:vaitulevichaleh@gmail.com" class="footer__mail btn magnetic" data-btn-hover data-strength="70" data-strength-text="40" style="translate: none; rotate: none; scale: none; transform: rotate(0.001deg);">
                <div class="btn__bg"></div>
                <div class="btn__circle-wrap">
                    <div class="btn__circle">
                        <div class="before__100"></div>
                    </div>
                </div>
                <span class="btn__text">
                    <p class="btn-text-p change">vaitulevichaleh@gmail.com</p>
                </span>
                <div class="btn__border"></div>
            </a>
        </div>
        <div class="footer__right right-footer">
            <div class="right-footer__body">
            <div class="right-footer__logo">
                <figure><img src="@/assets/images/A.svg" alt="logo" class="right-footer__logo--a"></figure>
                <figure><img src="@/assets/images/V.svg" alt="logo" class="right-footer__logo--v"></figure>
            </div>
            </div>
        </div>
    </div>
    <div class="footer__copyright" data-scroll data-scroll-speed="-8.5" data-scroll-position="bottom">
        <div class="header__header magnetic" data-strength="20" data-strength-text="10">
        <div class="header__svg-icon top">    
            <a href="https://vaitulevichaleh.com" class="header__logo-btn">
            <p class="logo">© 2024</p> 
            <span class="header__logo-text logo-text">
                <span class="logo-text__code">Coded by</span>
                        <div class="logo-text__wrap">
                <span class="logo-text__aleh">Aleh</span>
                <span class="logo-text__vait">Vaitulevich</span>
                <p hidden class="btn__text"></p>
                </div>
            </span>
            </a>
        </div>
        </div>
        <div class="footer__time-component">
            <h5 class="footer__time-label">TIME</h5>
            <p class="time-millisec"></p>
        </div>
    </div>
    
    </footer>
</template>

<style scoped lang="scss">
@use '@/assets/styles/components/footer-main';
</style> 