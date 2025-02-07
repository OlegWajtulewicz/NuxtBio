<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { useI18n } from 'vue-i18n'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const { t } = useI18n()

// Регистрируем ScrollTrigger только на клиенте
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

function initTricksWords() {
  try {
    const spanElements = document.querySelectorAll('.about__text .span-lines')
    if (!spanElements.length) return

    spanElements.forEach(wordWrap => {
      if (!wordWrap?.innerHTML) return

      const words = wordWrap.textContent.split(' ')
      const wrappedWords = words.map(word => 
        `<span class="span-line"><span class="span-line-inner">${word}</span></span>`
      ).join(' ')
      
      wordWrap.innerHTML = wrappedWords
    })
  } catch (error) {
    console.warn('Error in initTricksWords:', error)
  }
}

function initSpanLinesAnimation() {
  try {
    if (document.querySelector('.span-lines.animate')) {
      document.querySelectorAll('.span-lines.animate').forEach(function(triggerElement) {
        let targetElements = triggerElement.querySelectorAll('.span-line-inner')

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            toggleActions: 'play none none reset',
            start: "0% 100%",
            end: "100% 0%"
          }
        })

        if (targetElements.length > 0) {
          tl.from(targetElements, {
            y: "100%",
            stagger: 0.01,
            ease: "power3.out",
            duration: 1
          })
        }
      })
    }
  } catch (error) {
    console.warn('Error in initSpanLinesAnimation:', error)
  }
}

onMounted(() => {
  if (!process.client) return
  
  // Даем время на рендеринг
  window.addEventListener('load', () => {
    initTricksWords()
    initSpanLinesAnimation()
  })
})
</script>

<template>
<section class="about" data-scroll-section>
    <div class="about__container">
       <div class="about__wrapper">
           <div class="about__body">
            <div class="about__text">
                <p class="span-lines animate">
                    {{ t('about_home.main_text') }}
                </p> 
            </div>
            <div class="about__kontext">
                <p class="about__kontext--text">
                    {{ t('about_home.context_text') }}
                </p>
                <div class="about__image magnetic" data-scroll data-scroll-speed="-1.2">
                    <div class="spinner magnetic" data-strength="70"></div>
                </div>
            </div>
           </div>
        </div>
    </div>
</section> 
</template>

<style scoped lang="scss">
@use '@/assets/styles/components/about-home.scss' as *;

.about__text {
  position: relative;
  overflow: hidden;
  opacity: 1;
  min-height: 20px;
}

.span-lines {
  display: inline-block;
  overflow: hidden;
  width: 100%;
  opacity: 1;
}

.span-line {
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
  margin-right: 0.25em;
  opacity: 1;
}

.span-line-inner {
  display: inline-block;
  transform: translateY(100%);
  will-change: transform;
  opacity: 1;
}
</style>
