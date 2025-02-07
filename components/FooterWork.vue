<script setup>
import { onMounted, onUnmounted, defineProps } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import { products } from '@/data/product'

const router = useRouter()
const { t } = useI18n()
const route = useRoute()

// Получаем текущий слаг из URL
const currentSlug = computed(() => route.params.slug)

// Получаем информацию о следующем проекте
const nextProject = computed(() => {
  const currentProduct = products[currentSlug.value]
  return currentProduct?.nextProject || null
})

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

// Функция для инициализации эффекта фона при наведении
function initBgFooterLink() {
  if (!process.client) return

  document.querySelectorAll('.footer-product__link-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      // Получаем цвет из .footer-product__image-color
      const colorElement = item.querySelector('.footer-product__image-color')
      if (!colorElement) return
      
      const backgroundColor = window.getComputedStyle(colorElement).backgroundColor
  
      // Устанавливаем цвет для псевдоэлемента с прозрачностью через rgba
      const rgbaColor = backgroundColor.replace('rgb', 'rgba').replace(')', ', 0.05)')
      document.querySelector('.footer').style.setProperty('--footer-before-color', rgbaColor)
  
      // Устанавливаем цвет для самой .footer
      document.querySelector('.footer').style.backgroundColor = rgbaColor
  
      // Скрываем или делаем прозрачным .footer-product__image-color
      colorElement.style.opacity = '0'
    })
  
    item.addEventListener('mouseleave', () => {
      // Сбрасываем цвет переменной
      document.querySelector('.footer').style.setProperty('--footer-before-color', 'transparent')
  
      // Сбрасываем фон самой .footer
      document.querySelector('.footer').style.backgroundColor = ''
  
      // Восстанавливаем видимость .footer-product__image-color
      const colorElement = item.querySelector('.footer-product__image-color')
      if (colorElement) {
        colorElement.style.opacity = '0.05'
      }
    })
  })
}

onMounted(() => {
  // Инициализация таймера
  if (document.querySelector(".time-millisec")) {
    timeInterval = setInterval(getTimeMillis, 100)
  }

  // Инициализация эффекта фона при наведении
  initBgFooterLink()
})

// Очищаем интервал при размонтировании компонента
onUnmounted(() => {
  if (timeInterval) {
    clearInterval(timeInterval)
  }
})

// Функция для возврата назад
function goBack() {
  router.back() // Это вернет на предыдущую страницу в истории браузера
}
</script>

<template>
  <div>
    <footer id="footer" class="footer footer-product" data-scroll-section>
				<div class="footer-product__container">
					<div class="footer__wrapper footer-product__wrapper-top" v-if="nextProject">
						<NuxtLink :to="`/work/${nextProject.slug}`" class="footer-product__link-item next-case">
						<div class="footer-product__title">
							<h2>{{ nextProject.title }}</h2> 
						</div>
						<div class="footer-product__image-wrap" data-scroll data-scroll-speed="3" data-scroll-position="bottom">
							<div class="footer-product__image-body">
							<div :class="['footer-product__image-color', nextProject.color]"></div>
							<img :src="nextProject.image" class="footer-product__image ibg" :alt="nextProject.title">
							</div>
						</div>
						</NuxtLink>
					</div>
					<div class="footer-product__wrapper-bottom">
						<div class="footer__line"></div>  
						<button 
							@click="goBack"
							class="footer__mail btn magnetic" 
							data-btn-hover 
							data-strength="70" 
							data-strength-text="40"
						>
							<div class="btn__bg"></div>
							<div class="btn__circle-wrap">
								<div class="btn__circle">
									<div class="before__100"></div>
								</div>
							</div>
							<span class="btn__text">
								<p class="btn-text-p change">{{ t('back') }}</p>
							</span>
							<div class="btn__border"></div>
						</button>
					</div>
					<div class="footer__copyright" >
						<div class="header__header magnetic" data-strength="20" data-strength-text="10">
								<div class="header__svg-icon top">    
									<a href="https://vaitulevichaleh.com" class="header__logo-btn">
										<p class="logo">© 2024</p> 
										<span class="header__logo-text logo-text">
											<span class="logo-text__code">Coded by</span>
											<div class="logo-text__wrap">
												<span class="logo-text__aleh">Aleh</span>
												<span class="logo-text__vait">Vaitulevich</span>
											</div>
										</span>
									</a>
								</div>
							</div>
              <div class="footer__cookie magnetic" data-strength="20" data-strength-text="10">
                <NuxtLink to="/cookie" class="footer__cookie">Cookie Policy<p hidden class="btn__text"></p></NuxtLink>
              </div>
              <div class="magnetic footer__privacy" data-strength="20" data-strength-text="10">
          <NuxtLink to="/privacy" class="footer__cookie">Privacy Policy<p hidden class="btn__text"></p></NuxtLink>
        </div>
						<div class="footer__time-component">
						<h5 class="footer__time-label">TIME</h5>
						<p class="time-millisec"></p>
						</div>
					</div>
				</div>
			</footer>  
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/components/footer-main';


</style> 